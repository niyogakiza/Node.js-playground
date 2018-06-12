const fs = require("fs");


// rename file
fs.renameSync("./lib/project-config.js", "./lib/config.json");
console.log("Config Json file renamed");


// move a file
fs.rename('./lib/Aimable.md', "./notes.md", function (err) {
    if(err){
        console.log(err)
    } else {
        console.log("notes.md moved successfully")
    }
});

