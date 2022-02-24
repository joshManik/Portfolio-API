FROM node:16.13.0

WORKDIR /server 


COPY . .

RUN npm i express multer dotenv mysql2 cors

EXPOSE 4000

CMD node server.js
