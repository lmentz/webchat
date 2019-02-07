// chat.js
const mongoose = require('mongoose');
var messageSchema = new mongoose.Schema({
    id: Number,
    author: String,
    message: String
});
mongoose.model('Message', messageSchema);

module.exports = mongoose.model('Message');