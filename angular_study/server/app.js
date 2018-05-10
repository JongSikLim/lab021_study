//express 모듈을 로딩한다. 인스턴스 하나를 생성해서 app에 저장한다.
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//static file 설정!
app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));


//기본 라우팅을 설정했다. 도메인에 접속하면 Hello world 문자열을 출력하도록 했다.
app.get('/', function(req, res){
    res.sendFile('index.html');
});

//listen 함수로 서버를 구동한다. 3000포트를 이용한다.
app.listen(3000, function(){
    console.log('Example app listening on port 3000');
});


//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var infos= [{
      id: 1,
      name: 'Jongsik',
      age: 26
    },{
        id: 2,
        name: 'Wonmin',
        age: 28
    },{
        id: 3,
        name: 'Seokmin',
        age: 29
    },{
        id: 4,
        name: 'Cpt.Lee',
        age: 38
    },{
        id: 5,
        name: 'EunJi',
        age: 30
    }]
    
//GET /api/info 라우팅 설정
app.get('/api/infos', function(req, res){
    res.json(infos);
});

//Post!
app.post('/api/infos', function(req, res){    
    var body = req.body;

    if(!req.body.name)
        return res.status(400).send();
    
    
    var newId = !infos.length? 1: infos.length+1;

    var newInfo = {
        id: newId,
        name: body.name,
        age: body.age
    }
    infos.push(newInfo);

    res.json(req.body);
});