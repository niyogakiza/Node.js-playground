const fs = require("fs");


// reading files
const content = fs.readFileSync("./lib/Person.js", "UTF-8");
console.log(content);

