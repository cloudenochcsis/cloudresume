# Production Deployment Guide (Systemd & CircleCI)

## Prerequisites

1. **DigitalOcean Droplet** (Ubuntu recommended)
2. **Domain name** (e.g., cloudenoch.com) pointed to your Droplet’s IP
3. **MongoDB Atlas** account and connection string
4. **SSL certificates** for your domain (optional but recommended)
5. **GitHub repository** with your application code
6. **CircleCI** project connected to your repository

```

### 2. Environment Setup
1. Create production `.env` file in the `api` directory:
```bash
MONGODB_URI=your_mongodb_atlas_connection_string
FRONTEND_URL=https://cloudenoch.com
```

### 3. Digital Ocean Setup
1. Create a new Digital Ocean Droplet
2. Install Docker and Docker Compose on the Droplet
3. Configure DNS A records:
   - `cloudenoch.com` → Droplet IP
   - `www.cloudenoch.com` → Droplet IP
   - `api.cloudenoch.com` → Droplet IP

### 4. Deployment
1. Clone the repository on the Droplet
2. Copy SSL certificates to the `ssl` directory
3. Start the application:
```bash
docker-compose up -d --build
```

### 5. Verify Deployment
1. Visit https://cloudenoch.com
2. Check if the visitor counter is working
3. Monitor logs:
```bash
docker-compose logs -f
```

## Maintenance
- Regular backups of MongoDB data
- Monitor server resources
- Keep containers updated
- Rotate SSL certificates before expiry

## Troubleshooting
1. Check container logs: `docker-compose logs`
2. Verify MongoDB connection
3. Check CORS settings if API requests fail
4. Verify SSL certificate configuration

---

## Handling MongoDB URI with Special Characters (Systemd Deployment)

When deploying the backend API with systemd, it’s important to handle the MongoDB connection string (URI) safely, especially if it contains special characters like `&`.

**Recommended Approach:**

1. **Use an Environment File:**  
   Instead of putting the MongoDB URI directly in the systemd service file, store it in a separate environment file (e.g., `/opt/resume-api/api.env`).

2. **Example `api.env`:**
   ```
   MONGODB_URI="your_full_mongodb_connection_string"
   ```

3. **Reference the Environment File in systemd:**  
   In your `resume-api.service` file, use:
   ```
   EnvironmentFile=/opt/resume-api/api.env
   ```

4. **Automate with CI/CD:**  
   During deployment (e.g., via CircleCI), create or update the `api.env` file on the server with the correct URI from your CI/CD environment variables.  
   Example deployment step:
   ```bash
   echo "MONGODB_URI=\"$MONGODB_URI\"" | sudo tee /opt/resume-api/api.env > /dev/null
   ```

**Why?**  
This method ensures the URI is not corrupted by shell or YAML parsing, and systemd reads it exactly as intended.
