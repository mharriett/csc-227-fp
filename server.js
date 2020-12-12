var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/calculate_coins.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/calculate_coins.js'));
});

app.listen(8080);