const exec = require('child_process').exec;


//exec("open http://www.google.com");
//exec("open -a terminal");
exec("ls", function(err, stdout){
    if(err){
        throw err;
    }
    console.log("Listing Finished");
    console.log(stdout);
});

