const functions = require('firebase-functions');
const express = require('express');
const data = require('./data/data.json');
const app = express();

app.get('*', (req, res) => {
    console.log(req.headers['user-agent']);
    if (req.headers['user-agent'].toLocaleLowerCase().indexOf('twitter') > -1 || req.headers['user-agent'].toLocaleLowerCase().indexOf('facebook') > -1) {
        res.sendfile('public/twitter.html');
    } else {
        res.sendfile('public/index.html');
    }
})

exports.app = functions.https.onRequest(app);
