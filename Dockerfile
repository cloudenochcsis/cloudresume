# Build stage
FROM node:16 as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# Production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create SSL directory and copy certificates
RUN mkdir -p /etc/nginx/ssl
COPY ssl/cloudenoch_com.ca-bundle /etc/nginx/ssl/fullchain.pem

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]