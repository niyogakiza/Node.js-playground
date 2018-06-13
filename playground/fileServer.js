const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
    console.log(`${req.method} request for ${req.url}`);
    if(req.url === '/'){
        fs.readFile('./public/index.html', 'UTF-8', function (err, html) {
           res.writeHead(200, {'Content-Type': 'text/html'});
           res.end(html);
        })
    }
    else if(req.url.match(/.css$/)){
        const cssPath = path.join(__dirname, 'public', req.url);
        const fileStream = fs.createReadStream(cssPath, 'UTF-8');

        res.writeHead(200, {"Content-Type": "text/plain"});
        fileStream.pipe(res)
    }
    else if(req.url.match(/.jpg$/)){
        const imgPath = path.join(__dirname, 'public', req.url);
        const imgStream = fs.createReadStream(imgPath);

        res.writeHead(200, {"Content-Type": "image/jpeg"});

        imgStream.pipe(res);
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 File not found!');
    }
}).listen(3000);

console.log('File server is running on port 3000');