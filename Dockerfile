# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile || yarn install
COPY . .
RUN yarn build

# Production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Create SSL directory
RUN mkdir -p /etc/nginx/ssl
# SSL certificates will be managed by Digital Ocean

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]