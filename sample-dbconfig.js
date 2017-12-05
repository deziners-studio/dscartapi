const mysql = require('mysql');

const db = mysql.createPool({
    host: 'hostname',
    user: 'username',
    password: '',
    database: 'databasename'
});

module.exports = db;
