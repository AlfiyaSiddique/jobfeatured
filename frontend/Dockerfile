FROM node:18-alpine

WORKDIR /app

# Install system dependencies
RUN apk add --no-cache git

# Install expo-cli globally
RUN npm install -g expo-cli

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose all necessary ports
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 8081

# Start the Expo development server
CMD ["expo", "start", "--dev-client", "--tunnel"]
