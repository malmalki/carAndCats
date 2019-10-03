const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write("Hello from Node");  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/ninjas') {
        fs.readFile('ninjas.html', 'utf8', function (errors){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write("info about ninja");  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/ninjas/new') {
        fs.readFile('dojo.html', 'utf8', function (errors,Content){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(Content);  //  send response body
            response.end(); // finished!
        });
    }

    
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
console.log("http://127.0.0.1:6789/");
