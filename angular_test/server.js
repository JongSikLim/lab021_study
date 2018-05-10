var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//static file 설정!
app.use('/', express.static(path.join(__dirname, './')));

app.get('/', function(req, res){
    res.sendFile('index.html');
});

app.listen(3030, function(){
    console.log('server running..');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var infos = [1,2,3,4,5];
app.get('/api/infos', function(req, res){
    console.log('신호가 온다.');
    res.json(infos);
});
app.post('/api/infos', function(req, res){
    console.log(req.body);
    infos.push(req.body.num);
    res.json(infos);
});
app.delete('/api/infos/id', function(req, res){
    
    res.json(infos);
});