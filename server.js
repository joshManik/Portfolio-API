const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const multer = require('multer');

const uploader = multer({ dest : './uploads'});

const app = express();

app.use(express.json());
app.use(cors());

require('dotenv').config();

const DB = mysql.createConnection({
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    port : process.env.DB_PORT
})

DB.connect()

// Create Inital Tables upon start

const initialQuery = `CREATE TABLE IF NOT EXISTS photoTest (
    id INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
    path VARCHAR(255) NOT NULL
)`
DB.query(initialQuery, (err) => {
    if (err) throw err;
    console.log("Created inital table")
});

app.get('/pastprojects/all', (req, res) => {
    const QUERY = `SELECT * FROM photoTest`
    DB.query(QUERY, (err, result) => {
        if (err) throw err;
        res.send(result)
    });
});

app.post('/pastprojects/create', (req, res) => {
    const QUERY = ``
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port : ${process.env.SERVER_PORT}`)
});



