# Production Deployment Guide

## Prerequisites
1. A Digital Ocean account
2. Domain name (cloudenoch.com) configured in Digital Ocean's DNS
3. MongoDB Atlas account with connection string
4. SSL certificates for your domain

## Deployment Steps

### 1. Set up SSL Certificates
Create an `ssl` directory and add your SSL certificates:
```bash
mkdir ssl
# Add your SSL certificates:
# - ssl/cloudenoch.com.crt
# - ssl/cloudenoch.com.key
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
