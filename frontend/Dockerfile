FROM node:13.12.0-alpine
WORKDIR /app
COPY . /app

RUN npm install


RUN ls /app
RUN ls /app/public

EXPOSE 3000

CMD npm start