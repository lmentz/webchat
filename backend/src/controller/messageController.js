// messageController.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Message = require('../model/messageModel');

var cur_id = 0;
var messages = [];

// Synchronize to get current message ID (to read from there on)
router.get('/chat/sync', (req, res) => {
    res.end('' + cur_id);
});

// Creates new message
router.post('/chat/new', (req, res) => {
    let new_msg = {
        id: cur_id,
        author: req.body.author,
        message: req.body.message
    };
    cur_id = messages.push(new_msg);
    res.status(200).send('' + cur_id);
});

// Get specific message
router.get('/chat/get/:msgId', (req, res) => {
    let msgId = req.params.msgId;
    if (msgId >= cur_id) {
        res.sendStatus(404);
        return;
    }
    res.status(200).json({
        id: messages[msgId].id,
        author: messages[msgId].author,
        message: messages[msgId].message
    });
});

module.exports = router;