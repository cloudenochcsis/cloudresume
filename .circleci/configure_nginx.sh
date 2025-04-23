#!/bin/bash

# Exit on error
set -e

CONFIG_FILE="/etc/nginx/sites-available/cloudenoch.com"
BACKUP_FILE="${CONFIG_FILE}.bak.$(date +%s)"

echo "Current Nginx config files:"
ls -la /etc/nginx/sites-enabled/

echo -e "\nCurrent ${CONFIG_FILE} configuration:"
cat "${CONFIG_FILE}"

# Check/Update Nginx config for API proxy
if ! grep -q "location /api" "${CONFIG_FILE}"; then
    echo -e "\nAPI location block not found. Adding it..."
    cp "${CONFIG_FILE}" "${BACKUP_FILE}"
    echo "Backup created at ${BACKUP_FILE}"
    # Use sed with a specific insertion point and clear syntax
    sed -i '/^\s*location \/ {/i \
    location /api/ {\
        proxy_pass http://localhost:3000/;\
        proxy_http_version 1.1;\
        proxy_set_header Upgrade $http_upgrade;\
        proxy_set_header Connection '\''upgrade'\'';\
        proxy_set_header Host $host;\
        proxy_cache_bypass $http_upgrade;\
    }
' "${CONFIG_FILE}"
    echo "Added API location block."
elif grep -q "proxy_pass http://api:" "${CONFIG_FILE}"; then
    echo -e "\nFound Docker API reference. Updating to localhost:3000..."
    cp "${CONFIG_FILE}" "${BACKUP_FILE}"
    echo "Backup created at ${BACKUP_FILE}"
    sed -i 's|proxy_pass http://api:[0-9]\+|proxy_pass http://localhost:3000|g' "${CONFIG_FILE}"
    echo "Updated API proxy pass."
elif ! grep -q "proxy_pass http://localhost:3000" "${CONFIG_FILE}"; then
    echo -e "\nAPI location block points to wrong port. Updating to 3000..."
    cp "${CONFIG_FILE}" "${BACKUP_FILE}"
    echo "Backup created at ${BACKUP_FILE}"
    sed -i 's|proxy_pass http://localhost:[0-9]\+|proxy_pass http://localhost:3000|g' "${CONFIG_FILE}"
    echo "Updated API proxy pass port."
else
    echo -e "\nNginx API configuration appears correct."
fi

# Test Nginx configuration
echo -e "\nTesting Nginx configuration..."
nginx -t

# Reload/Restart Nginx
echo -e "\nReloading Nginx service..."
if systemctl reload nginx; then
    echo "Nginx reloaded successfully."
else
    echo "Nginx reload failed. Attempting restart..."
    if systemctl restart nginx; then
        echo "Nginx restarted successfully."
    else
        echo "ERROR: Nginx restart failed. Check status and logs." >&2
        systemctl status nginx || true
        tail -n 30 /var/log/nginx/error.log || true
        exit 1
    fi
fi

echo "Nginx configuration updated and service reloaded/restarted successfully."
exit 0
