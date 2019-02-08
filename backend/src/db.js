// db.js
const mongoose = require('mongoose');

// You must provide your own dbConfig.json file placed on the same
// directory as this file. Follow the pattern:
// {"connectionString": "mongodb://127.0.0.1/"}
// Change the connectionString value to match your mongoDB instance.
var conf = require('./dbConfig.json');

mongoose.connect(conf.connectionString, { useNewUrlParser: true });