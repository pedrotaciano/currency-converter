# Use the official Node.js image as a base image
FROM node:20 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build -- --prod

# Use a lightweight image for the final stage
FROM nginx:alpine

# Copy the built app from the previous stage to the nginx directory
COPY --from=builder /app/dist/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
