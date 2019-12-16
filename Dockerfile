FROM node:10.15.3
WORKDIR /app
COPY package*.json ./ /app/
RUN npm install npm cache clean --force
CMD node ./dist/server.js