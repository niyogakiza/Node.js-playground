const spawn = require('child_process').spawn;

const cp = spawn("node", ["alwaysTalking"]);

cp.stdout.on("data", function (data) {
    console.log(`STDOUT: ${data.toString().trim()}`);
});

cp.on("close", function () {
    console.log('Child Process has ended');
    process.exit()
});

setTimeout(function () {
    cp.stdin.write("stop");
}, 4000);


