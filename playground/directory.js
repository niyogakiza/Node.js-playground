const fs = require('fs');

// check if directory exist
if(fs.existsSync("Js")){
    console.log('Directory already exist');
} else {
    // Creating Directory
    fs.mkdir("Js", function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Directory created! ")
        }
    });
}


