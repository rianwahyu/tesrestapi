var mysql = require('mysql');

//koneksi db

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbrestapi'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('MySql terkoneksi')
});

module.exports = conn;