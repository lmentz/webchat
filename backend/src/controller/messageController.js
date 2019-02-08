// messageController.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Message = require('../model/messageModel');

var cur_id = -1;
var messages = [];

// Synchronize to get current message ID (to read from there on)
router.get('/chat/sync', (req, res) => {
    res.end('' + cur_id + ''); // TODO make sure it works
});

// Creates new message
router.post('/chat/new', (req, res) => {
    let new_msg = {
        id = cur_id,
        author = req.body.author,
        text = req.body.text
    };
    cur_id = messages.push(new_msg);
});