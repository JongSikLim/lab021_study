var http = require('http');
var fs = require('fs');
var url = require('url');

//웹 서버 객체 생성
http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;

    if(pathname=='/') pathname = '/index.html';

    fs.readFile(pathname.substr(1), function(err, data){
        if(err){
            console.log(err);
            //페이지를 찾을 수 없음
            //HTTP STATUS - 404 NOT FOUND
            console.log('404 에러');
            response.writeHead(404, {'Content-Type': 'text/html'});
        }else{
            //페이지 찾음
            //HTTP STATUS - 200 OK
            response.writeHead(200, {'Content-Type': 'text/html'});

            //파일을 읽어와서 responseBody 에 작성
            response.write(data.toString());
        }        
        //responseBody 전송
        response.end();
    });
}).listen(8081);

console.log('Server running at http://localhost:8081/');
