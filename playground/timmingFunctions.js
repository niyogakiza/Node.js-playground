const readline = require('readline');
// Global Timing functions
let waitTime = 3000;
let currentTime = 0;
let waitInterval = 500;
let percentWaited = 0;
//console.log("wait for it");

// function writeWaitingPercent(p){
//     process.stdout.clearLine();
//     process.stdout.cursorTo(0);
//     process.stdout.write(`waiting ... ${p}`);
// }
function writeWaitingPercent(p) {
    //readline.clearLine(process.stdout);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(`waiting ... ${p}%`);
}

let interval = setInterval(function () {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime) * 100);
    //console.log(`Waiting ${currentTime/1000} seconds...`);
    writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(function ( ){
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log('finished 3 seconds!');
}, waitTime);

process.stdout.write("\n\n");

writeWaitingPercent(percentWaited)
