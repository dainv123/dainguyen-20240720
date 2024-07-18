FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the NestJS app
RUN npm run build

# Expose port 3001 to the outside world
EXPOSE 3001

# Start the NestJS server
CMD ["npm", "run", "start:prod"]
