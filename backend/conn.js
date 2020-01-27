var mysql = require('mysql');


const conn = mysql.createConnection({
    host: 'localhost',
    port:'8889',
    user: 'root',
    password: 'root',
    database: 'dodolan'
  });

conn.connect(function (err){
    if(err) throw err;
});

module.exports = conn;