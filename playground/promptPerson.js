const readline = require('readline');
const fs = require("fs");

const rl = readline.createInterface(process.stdin, process.stdout);
const realPerson = {
    name: '',
    sayings: []
};

rl.question("What is the name of the real person ?", function (answer) {
    realPerson.name = answer;
    fs.writeFileSync(realPerson.name + ".md", `${realPerson.name}\n=============\n\n`);
    rl.setPrompt(`What would ${realPerson.name} say? `);
    rl.prompt();

    rl.on('line', function(saying) {
        realPerson.sayings.push(saying.trim());
        fs.appendFile(realPerson.name + ".md", `* ${saying.trim()} \n`);
        if(saying.toLowerCase().trim() === 'exit'){
            rl.close();
        } else {
            rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave)`);
            rl.prompt();
        }
    })

});

rl.on('close', function () {
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
    process.exit();
});