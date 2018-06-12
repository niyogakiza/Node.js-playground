const fs = require("fs");

// fs.readFile('./alwaysTalking.js', 'UTF-8', function (err, chatLog) {
//     console.log(`File Read ${chatLog.length}`); // File Read 781
// });

//console.log("Reading File");

let stream = fs.createReadStream('./alwaysTalking.js', 'UTF-8');

let data = "";

stream.once("data", function () {
    console.log("\n\n\n");
    console.log("Started Reading File");
    console.log("\n\n\n");
});

stream.on("data", function (chunk) {
    process.stdout.write(` chunk: ${chunk.length} |`);
    data += chunk;
});

stream.on("end", function () {
    console.log("\n\n\n");
    console.log(`Finished Reading File ${data.length}`);
    console.log("\n\n\n");
});