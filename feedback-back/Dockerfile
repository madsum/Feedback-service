FROM node:latest

# Create app directory 
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "dist/app.js"]
