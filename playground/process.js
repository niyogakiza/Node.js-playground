function grab(flag) {
    let index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
}

let greeting = grab('--greeting');
let user = grab('--user');

if(!user || !greeting){
    console.log('You blew it');
} else {
    console.log(`Welcome ${user}, ${greeting}`);
}

// Standard input and standard output

const questions = [
    "What is your name ?",
    "How old are you?",
    "What is your favorite programming language?"
];

let answers = [];
//stdout : standard output
//stdin : standard input
function ask(i) {
    process.stdout.write(`\n\n\n\n\n\n ${questions[i]}`);
    process.stdout.write("  >  ");
}

process.stdin.on('data', function(data){
    //process.stdout.write('\n' + data.toString().trim() + '\n');
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', function(){
    process.stdout.write("\n\n\n\n");

    process.stdout.write(`Your name is ${answers[0]},  you are ${answers[1]} years old,  ${answers[2]} web developer`);

    process.stdout.write("\n\n\n\n");

});
ask(0);

