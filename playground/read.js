const fs = require("fs");
const path = require("path");

fs.readdir("./lib", function (err, files) {
    files.forEach(function(filename){
        let file  = path.join(__dirname, "lib", filename);
        let stats = fs.statSync(file);
        if(stats.isFile() && filename !== ".DS_Store"){
            fs.readFile(file, 'UTF-8', function (err, contents) {
                console.log(contents)
            })
        }
    });
});


// // reading files
// const content = fs.readFileSync("./lib/Person.js", "UTF-8");
// console.log(content);
// console.log("==================================================");
//
// //With a callback
// fs.readFile('./lib/Person.js', "UTF-8", function (err, content) {
//     if(err){
//         console.log(err);
//     }
//     console.log(`From a callback ${content}`);
// });
//
//
