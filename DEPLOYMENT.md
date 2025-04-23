# Production Deployment Guide (Systemd & CircleCI)

## Prerequisites

1.  **DigitalOcean Droplet** (Ubuntu recommended)
2.  **Domain name** (e.g., cloudenoch.com) pointed to your Droplet’s IP
3.  **MongoDB Atlas** account and connection string
4.  **SSL certificates** for your domain (optional but recommended)
5.  **GitHub repository** with your application code
6.  **CircleCI** project connected to your repository

---

## Deployment Overview

-   **Frontend:** React app, built and served as static files (e.g., via Nginx)
-   **Backend:** FastAPI app, managed by systemd, served via Uvicorn
-   **Database:** MongoDB Atlas (cloud-hosted)
-   **CI/CD:** CircleCI automates build and deployment steps

---

## Step 1: Prepare Your Server

1.  **SSH into your Droplet:**
    ```bash
    ssh root@your_droplet_ip
    ```

2.  **Install system dependencies:**
    ```bash
    apt-get update
    apt-get install -y python3 python3-pip python3-venv nginx git
    ```

---

## Step 2: Configure MongoDB URI Handling

**Why:**
Special characters in the MongoDB URI can break deployments if injected directly into systemd service files.
**Solution:** Use an environment file.

1.  **Create `/opt/resume-api/api.env`** with:
    ```
    MONGODB_URI="your_full_mongodb_connection_string"
    ```

2.  **Reference this file in your systemd service:**
    In `/etc/systemd/system/resume-api.service` add:
    ```ini
    EnvironmentFile=/opt/resume-api/api.env
    ```

---

## Step 3: Set Up the Backend API

1.  **Clone your repository:**
    ```bash
    git clone https://github.com/<your-username>/<your-repo>.git /opt/resume-api
    cd /opt/resume-api
    ```

2.  **Set up Python virtual environment:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    pip install -r api/requirements.txt
    ```

3.  **Create the systemd service file** at `/etc/systemd/system/resume-api.service`:
    ```ini
    [Unit]
    Description=Resume API Service
    After=network.target

    [Service]
    User=root
    WorkingDirectory=/opt/resume-api
    EnvironmentFile=/opt/resume-api/api.env
    ExecStart=/opt/resume-api/venv/bin/uvicorn main:app --host 0.0.0.0 --port 3000
    Restart=always

    [Install]
    WantedBy=multi-user.target
    ```

4.  **Start and enable the service:**
    ```bash
    systemctl daemon-reload
    systemctl enable resume-api
    systemctl start resume-api
    ```

---

## Step 4: Set Up and Configure Nginx

1.  **Configure Nginx to serve the frontend and reverse proxy API:**
    -   Place your React build files in `/var/www/portfolio/`
    -   Update `/etc/nginx/sites-available/cloudenoch.com` with:
        ```nginx
        server {
            listen 80;
            server_name cloudenoch.com www.cloudenoch.com;

            root /var/www/portfolio;
            index index.html;

            location / {
                try_files $uri /index.html;
            }

            location /api/ {
                proxy_pass http://localhost:3000/;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
            }
        }
        ```
    -   Enable the config and reload Nginx:
        ```bash
        ln -s /etc/nginx/sites-available/cloudenoch.com /etc/nginx/sites-enabled/
        nginx -t
        systemctl reload nginx
        ```

---

## Step 5: CI/CD with CircleCI

1.  **Store secrets (like `MONGODB_URI`) as environment variables in CircleCI Project Settings.**
2.  **CircleCI pipeline should:**
    -   Build the React frontend and deploy static files to `/var/www/portfolio/`
    -   Deploy backend code to `/opt/resume-api/`
    -   Write the `MONGODB_URI` to `/opt/resume-api/api.env`
    -   Copy and reload the `resume-api.service` file
    -   Reload/restart systemd and Nginx as needed

**Example CircleCI deployment step for environment file:**
```bash
echo "MONGODB_URI=\"$MONGODB_URI\"" | sudo tee /opt/resume-api/api.env > /dev/null
```

---

## Step 6: Verify Deployment

-   Visit your domain in a browser to confirm the frontend loads.
-   Test API endpoints (e.g., `/api/visitors`) to ensure the backend is working.
-   Check logs:
    ```bash
    journalctl -u resume-api -f
    tail -f /var/log/nginx/error.log
    ```

---

## Maintenance & Troubleshooting

-   **Restart backend:** `systemctl restart resume-api`
-   **Update environment variables:** Edit `/opt/resume-api/api.env` and restart the service.
-   **Monitor logs:** See above.
-   **SSL:** Use Let’s Encrypt or your own certificates for HTTPS.

---

**Note:**
This guide assumes a single-server setup. For scaling, consider containerization and orchestration (e.g., Docker, Kubernetes) in the future.
