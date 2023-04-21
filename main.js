const http = require('http');
const fs = require('fs');
const crud = require('./model/crudcall');
// SERVER CREATION
http.createServer((req, res)=>{
    //console.log(req.method +' ' + req.url);
    if(req.url == '/' && req.method == 'POST'){
        req.on('data',(chunk)=>{
            let info = chunk.toString();
            crud.crudcall(info);
            //console.log(info);
        });
    }
    if(req.url =='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        let data = fs.readFileSync("index.html", "utf-8");
        res.end(data);
    }
    if(req.url == '/assets/style.css'){
        res.writeHead(200,{'Content-Type':'text/css'});
        let data = fs.readFileSync("./assets/style.css", "utf-8");
        res.end(data);
    }
    if(req.url == '/view/createlist.js'){
        res.writeHead(200,{'Content-Type':'text/javascript'});
        let data = fs.readFileSync("./view/createlist.js", "utf-8");
        res.end(data);
    }
    if(req.url == '/view/updatelist.js'){
        res.writeHead(200,{'Content-Type':'text/javascript'});
        let data = fs.readFileSync("./view/updatelist.js", "utf-8");
        res.end(data);
    }
    if(req.url == '/assets/media/smiling.png'){
        res.writeHead(200, {'Content-Type':'image/png'});
        let data = fs.readFileSync("./assets/media/smiling.png");
        res.end(data, 'binary');
    }
    if(req.url == '/assets/media/paper-clip.png'){
        res.writeHead(200, {'Content-Type' : 'image/png'});
        let data = fs.readFileSync("./assets/media/paper-clip.png");
        res.end(data, 'binary');
    }
    if(req.url == '/assets/media/party.png'){
        res.writeHead(200, {'Content-Type' : 'image/png'});
        let data = fs.readFileSync("./assets/media/party.png");
        res.end(data, 'binary');
    }
    if(req.url == '/assets/media/wink.png'){
        res.writeHead(200, {'Content-Type' : 'image/png'});
        let data = fs.readFileSync("./assets/media/wink.png");
        res.end(data, 'binary');
    }
    if(req.url == '/assets/media/binder-clip.png'){
        res.writeHead(200, {'Content-Type' : 'image/png'});
        let data = fs.readFileSync("./assets/media/binder-clip.png");
        res.end(data, 'binary');
    }
    if(req.url == '/view/data.json'){
        res.writeHead(200,{'Content-Type':'application/json'});
        let data = fs.readFileSync("./view/data.json", "utf-8");
        res.end(data);
    }
}).listen(3000); // LISTENING TO PORT 3000