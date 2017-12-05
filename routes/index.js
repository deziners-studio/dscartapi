const express = require('express');
const router = express.Router();

const products = require('./products/index');
const categories = require('./categories/index');

router.get('/', function(req, res, next) {
    res.send('I am API');
});

router.use('/products', products);
router.use('/categories', categories);

module.exports = router;