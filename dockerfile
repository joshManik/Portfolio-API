FROM node:16.13.0

WORKDIR /server

RUN npm i express mysql2 cors multer dotenv

RUN git init
RUN git remote add origin https://github.com/joshManik/Portfolio-API
RUN git pull origin main

COPY . ./server

CMD node server.js
