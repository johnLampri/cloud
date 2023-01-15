FROM node:13.12.0-alpine as build
WORKDIR /app

COPY . /app

RUN npm install


RUN npm run build

FROM nginx:latest


WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


