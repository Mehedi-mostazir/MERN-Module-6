const express = require('express');
const app = express();

app.use('/api', require('./src/Routes/api'));

module.exports = app;
