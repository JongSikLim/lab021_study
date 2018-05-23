var express = require('express');
var app = express();
var path = require('path');

app.use('/', express.static(path.join(__dirname, '/')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.get('/', (res, req)=>{res.sendFile('index.html')});

app.listen(3001, ()=>{console.log('port: 3001 server On!')});