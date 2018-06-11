const fs = require("fs");

const files = fs.readdirSync('./lib'); // This will stop other services untill will finish
console.log(`From readdirSync ${files}`);

// this is better because it uses callback function
fs.readdir('./lib', function (err, files) {
    if(err){
        throw err;
    }
    console.log(files);
});
console.log('Reading Files....');
