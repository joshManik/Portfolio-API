FROM node:16.13.0

WORKDIR /server 


COPY /server ./server

RUN npm i

EXPOSE 8000

CMD node server/server.js
