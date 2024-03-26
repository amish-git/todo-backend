# Select a base image
FROM node:18-bookworm-slim

#Create a directory and go to the directory

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 4000

RUN yarn build


CMD yarn migrate \
   & yarn start:prod
