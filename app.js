const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response) {
    console.log('client request URL: ', request.url);

    // this is how we do routing:
    if (request.url === '/cars') {
        fs.readFile('./views/index.html', 'utf8', function (errors, Content) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
            response.write(Content);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, Content) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
            response.write(Content);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === '/images/cls.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cls.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/m5.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/m5.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }


    else if (request.url === '/images/cat.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/pizza.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/pizza.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/css' });
            response.write(contents);
            response.end();
        })
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
