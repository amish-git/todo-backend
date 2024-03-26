# Select a base image
FROM node:18-bookworm-slim

#Create a directory and go to the directory

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn

# Copy the rest of the application code to the working directory
COPY . .

EXPOSE 4000


# Build the app
RUN yarn build

# Start the app
CMD yarn migrate \
   & yarn start:prod
