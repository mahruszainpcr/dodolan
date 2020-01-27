var mysql = require('mysql');

require('dotenv').config();
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    port:process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
  });

conn.connect(function (err){
    if(err) throw err;
});

module.exports = conn;