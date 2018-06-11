const fs = require("fs");

const md = `

sample Markdown Title
=====================

Sample subtitle
---------------

* point
* point
* point

`;

fs.writeFile("sample.md", md.trim(), function (err) {
    if(err){
        throw err;
    }
    console.log('File created');
});