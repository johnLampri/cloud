FROM node:latest
WORKDIR /app
COPY . /app
COPY package.json /app

RUN npm install
COPY . /app
EXPOSE 5001

CMD ["node", "script.js"]