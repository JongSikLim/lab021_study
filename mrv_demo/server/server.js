var express = require('express');
var path = require('path');
var app = express();

app.use('/', express.static(path.join(__dirname, '../')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.get('/', (res, req)=>{res.sendFile('index.html')});

app.listen(3000, ()=>{console.log('http://127.0.0.1:3000 server on!')});