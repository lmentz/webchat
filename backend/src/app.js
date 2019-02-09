// app.js
const express = require('express');
const app = express();
const db = require('./db');

var messageController = require('./controller/messageController');

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(messageController);

module.exports = app;