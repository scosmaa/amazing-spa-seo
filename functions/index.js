const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('*', (req, res) => {
    res.sendfile('public/index.html');
})

exports.app = functions.https.onRequest(app);
