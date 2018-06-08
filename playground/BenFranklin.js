const Person = require('./lib/Person');

let aima = new Person('Aimable Niyogakiza');
let obama = new Person('Balack Obama');

obama.on('speak', function (said) {
    console.log(`${this.name} -> ${said}`);
});


aima.on('speak', function (said) {
    console.log(`${this.name}: ${said}`);
});

aima.emit('speak', "You may delay, but time will not.");
obama.emit('speak', "Hoo, I was the first black american president");


// const events = require('events');
//
// let emitter = new events.EventEmitter();
//
// emitter.on('customEvent', function(message, status){
//     console.log(`${status}: ${message}`);
// });
//
// emitter.emit('customEvent', "Hello", 200);
