# Use an official Node.js runtime as a parent image
FROM node:20-alpine AS build

#Define the build environment
ARG build_env

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build:$build_env

# Use an official Nginx image to serve the built app
FROM nginx:1.27.2-alpine

# Copy the built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
