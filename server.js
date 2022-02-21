const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const multer = require('multer');

const uploader = multer({ dest : './uploads'});

const app = express();

app.use(express.json());
app.use(cors());

require('dotenv').config();

const DB_TABLE = process.env.DB_TABLE_NAME

const DB = mysql.createConnection({
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    port : process.env.DB_PORT
})

DB.connect()

// Create Inital Tables upon start

const initialQuery = `CREATE TABLE IF NOT EXISTS ${DB_TABLE} (
    id INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    path VARCHAR(255) NOT NULL
)`
DB.query(initialQuery, (err) => {
    if (err) throw err;
    console.log("Created inital table")
});

app.get('/pastprojects/all', (req, res) => {
    const QUERY = `SELECT * FROM ${DB_TABLE}`
    DB.query(QUERY, (err, result) => {
        if (err) throw err;
        res.send(result)
    });
});

app.post('/pastprojects/create', uploader.array('images', 3), (req, res) => {
    console.log(req.body.title)
    console.log(req.files[0].path)
    // const QUERY = `INSERT INTO ${DB_TABLE} SET ?`
    // DB.query(QUERY, upload, (err, row) => {
    //     if (err) throw err;

    //     console.log(row)

    //     res.send(row)
    // })
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port : ${process.env.SERVER_PORT}`)
});



