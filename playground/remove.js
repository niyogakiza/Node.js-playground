const fs = require("fs");


//Delete a file

try{
    fs.unlinkSync("./lib/config.json");
} catch (e) {
    console.log(e);
}

// fs.unlink("notes.md", function (err) {
//     if(err){
//         console.log(err)
//     } else {
//         console.log('notes.md removed');
//     }
// });

// Remove a directory : You cannot remove a directory if is not empty, first empty directory by moving files in another directory
fs.rmdir("./Js", function(err){
    if(err){
        throw err;
    }
    console.log("Js Directory removed");
});

// delete files in a directory
fs.readdirSync("./lib").forEach(function(filename){
    fs.unlinkSync("./lib/" + filename )
});
