const express = require('express');
const pool = require('../../dbconfig');

const router = express.Router();

router.get('/', (req, res, next) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query('SELECT * FROM products', (err, results, fields) => {
            if (err) throw err;
            
            res.json(results);
            connection.release();  
        });
    });
});

module.exports = router;