// app.js
const express = require('express');
const app = express();
const db = require('./db');

var messageController = require('./controller/messageController');
app.use(messageController);

module.exports = app;