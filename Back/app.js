const express = require('express');
const app = express();

const contactRouter = require('./route')();

app.use('', contactRouter);

module.exports = app;
