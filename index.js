const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const port = 80;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res, next) => {
    res.send('Welcome to DS ECommerce API, please use /api/ as a base to get API services');
});

app.use('/api', routes);

app.listen(port, () => {
    console.log('Server started on port:', port);
});
