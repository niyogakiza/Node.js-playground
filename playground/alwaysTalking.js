const sayings = [
    "You may delay, but time will not.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "It takes many good deeds to build a good reputation, and only one bad one to lose it.",
    "Early to bed and early to rise makes a man healthy, wealthy and wise",
    "By failing to prepare, you are preparing to fail",
    "An Investment in knowledge pays the best interest",
    "Well done is better than well said."
];

let interval = setInterval(function () {
    let i = Math.floor(Math.random() * sayings.length);
    process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on('data', function(data){
    console.log(`STDIN Data Received -> ${data.toString().trim()}`);
    clearInterval(interval);
    process.exit();
});