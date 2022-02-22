FROM node:16.13.0

WORKDIR /server 

RUN git init
RUN git remote add origin https://github.com/joshManik/Portfolio-API
RUN git pull origin main

RUN npm i

COPY . ./server

EXPOSE 8000

CMD node server.js
