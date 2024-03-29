FROM node:18-alpine

# Create app directory
# WORKDIR /home/ubuntu/SDN-Web-Server

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY index.js ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 3000
CMD [ "node", "index.js" ]