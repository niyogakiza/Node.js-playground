const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`
 <!DOCTYPE html>
    <html>
         <head>
             <title>From Server</title>
         </head>
    </html>
    <body>
    <H1>Heee I am from the server !!</H1>
    <p>${req.url}</p>
    <p>${req.method}</p>
    </body>
  
 </html>
    `);
    // res.writeHead(200, {"Content-Type": "text/plain"});
    // res.end("Hello World");
});

server.listen(3000);
console.log("Server is running on port 3000");