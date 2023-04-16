const http = require('http');
const { book } = require('./database.js');

http.createServer((req, res)=>{
    if(req.url =='/'){
        res.writeHead(200, {'content-type': 'text/html'});
        let value = book;
        console.log(book);
        res.end("hi biss");
    }
}).listen(3000);