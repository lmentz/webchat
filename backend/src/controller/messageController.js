// messageController.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Message = require('../model/messageModel');

var cur_id = 0;
Message.countDocuments({}, (err, count) => {
    if (err) {
        console.log("Bizarre error on Message.count()");
    } else {
        cur_id = count;
    }
});
// var messages = [];

// Synchronize to get current message ID (to read from there on)
router.get('/chat', (req, res) => {
    Message.countDocuments({}, (err, count) => {
        if (err) {
            res.status(500).send("Server error");
        } else {
            if (cur_id != count) {
                console.log("cur_id is different from Message.count(). Something might be wrong");
                cur_id = count;
            }
            res.status(200).send('' + (cur_id - 1)); // Usado porque acredita-se que o cur_id e o store estão sincronizados.
        }
    });
});

// Creates new message
router.post('/chat', (req, res) => {
    let new_msg = {
        id: cur_id,
        author: req.body.author,
        message: req.body.message
    };
    // cur_id = messages.push(new_msg);
    Message.create(new_msg, (err) => {
        if (err) {
            console.log('' + err);
            res.status(500).send('Server error');
        } else {
            res.status(200).send('OK');
            cur_id++;
        }
    });
});

// Get specific message
router.get('/chat/:msgId', (req, res) => {
    let msgId = req.params.msgId;
    if (msgId >= cur_id) {
        res.sendStatus(404);
    } else {
        Message.findOne({id: msgId}, (err, obj) => {
            if (err) {
                res.status(500).send('Server error');
            } else {
                let msg = {
                    author: obj.author,
                    message: obj.message
                };
                res.status(200).json(msg);
            }
        });
        // res.status(200).json({
            // id: messages[msgId].id,
            // author: messages[msgId].author,
            // message: messages[msgId].message
    }
});

module.exports = router;