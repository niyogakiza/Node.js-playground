const http = require('http');
const fs = require('fs');


http.createServer(function (req, res) {
    if(req.method === 'GET'){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream('./public/form.html', 'UTF-8').pipe(res);
    } else if(req.method === 'POST'){
        let body = '';
        req.on('data', function (chunk) {
            body += chunk
        });

        req.on('end', function () {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(`
            <!DOCTYPE html>
    <html>
         <head>
             <title>Form Results</title>
         </head>
    </html>
    <body>
    
    <H1>Your Form Results</H1>
    <p>${body}</p>
   
    </body>
 </html>
            `)
        })
    }

}).listen(3000);

console.log("Server is up on port 3000");