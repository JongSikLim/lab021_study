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

var infos=[];
app.get('/api/infos', function(req, res){
    console.log('get 통신중...');
    res.json(infos.sort());
});
app.post('/api/infos', function(req, res){
    console.log('get 통신중...');
    infos.push(req.body.num*1);
    res.json(infos.sort());
});
app.delete('/api/infos/:id', function(req, res){
    console.log('delete 통신중..');            
    var reqIdx = req.params.id*1;    
    var index = infos.indexOf(reqIdx);
    if(index === -1) throw new Error('no Data');
    infos.splice(index, 1);    
    res.json(infos.sort());
});
app.put('/api/infos/:id', function(req, res){
    console.log('update 통신중..');
    var body = req.body.num*1;
    console.log(req.body);
    console.log(body);
    var reqIdx = req.params.id*1;    
    var index = infos.indexOf(reqIdx);
    if(index === -1) throw new Error('no Data');    
    infos.splice(index,1, body);    
    res.json(infos.sort());
});