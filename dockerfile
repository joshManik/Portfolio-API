FROM node:16.13.0

WORKDIR /server 



RUN npm i

COPY . ./server

EXPOSE 8000

CMD node server.js
