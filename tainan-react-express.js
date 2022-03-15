const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
app.get('/*', function (req, res) {
    console.log(res.statusCode + "\t" + req.url);
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    
});

console.log("listen" + "\t" + "http://localhost:9096");
app.listen(9096);