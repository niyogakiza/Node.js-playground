const https = require('https');
const fs = require('fs');


const options = {
    hostname: 'en.wikipedia.org',
    port: 443,
    path: '/wiki/Balack_Obama',
    method: 'GET'
};

const req = https.request(options, function(res){
    let responseBody = '';
    console.log('Response from server started');
    console.log("\n");
    console.log(`Server Status: ${res.statusCode}` );
    console.log("\n");
    console.log("Response Headers: %j", res.headers);

    res.setEncoding('UTF-8');

    res.once("data", function(chunk){
        console.log(chunk);
    });

    res.on("data", function (chunk) {
        console.log(`--chunk-- ${chunk.length}`);
        responseBody += chunk;
    });

    res.on("end", function(){
        fs.writeFile('index.html', responseBody, function(err){
            if(err){
                throw err;
            } else {
                console.log('File Downloaded!');
            }
        });
    })

});

req.on('error', function (err) {
    console.log(`Problem with a request: ${err.message}`);
});

req.end();
