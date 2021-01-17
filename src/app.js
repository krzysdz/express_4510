const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// load routes
require('./loader/routes')(app);

module.exports = app;
