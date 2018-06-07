//console.log('starting App.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./note.js');

const titleOptions = {
    describe:'Title of note',
    demand:true,
    alias:'t'
};
const bodyOptions = {
    describe:'Body of note',
    demand: true,
    alias:'b'
};
const argv = yargs
    .command('add', 'Add a new note',{
        title:titleOptions,
        body:bodyOptions
    })
    .command('list','List all Notes')
    .command('read','Read a note',{
        title: titleOptions
    })
    .command('remove', 'Remove a note',{
        title: titleOptions
    })
    .help()// this provides command info.
    .argv;// this is where the yargs pass all the arguments
var command = process.argv[2];
//console.log('Command: ', command);
//console.log('Process',process.argv);
//console.log('Yargs', argv);

if(command === 'add'){
    var note = notes.addNote(argv.title,argv.body);//if one arguments of them is missing it will clash

    if(note){
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if(command === 'list'){

    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) =>{
        notes.logNote(note);
    });
} else if(command === 'remove'){

    var removednote = notes.removeNote(argv.title);
    var message = removednote ? "Note was removed": "Note not found";
    console.log(message);

} else if(command === 'read'){

    var note = notes.readAll(argv.title,argv.body);
    if(note){
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found.');
    }
} else {
    console.log('Command don\'t recognise!!');
}


























//=============== was for the lessons ==============

//on require we pass only one argument.
//const os = require('os');


// _ underscore is sign for lodash


//console.log(_.isString(true));// this printout false
//console.log(_.isString('Aimable'));// this is true.

//var filteredArray = _.uniq(['Aimable',1, 'Aimable', 1,2,3,4]);
//console.log(filteredArray);// output: [ 'Aimable', 1, 2, 3, 4 ],  removes duplicated array.

//var filteredArray = _.uniq(['Samuela']);
//console.log(filteredArray);
//const result = notes.addNote();// to call the exported module function in another file.
//console.log(result);
/* outPut:
starting App.
Starting note.js
addNote
New note */

//const sum = notes.add(4, 10);
//console.log(sum); //outPut: 14;

//var user = os.userInfo();


/*console.log(user);  OutPut:{ uid: 501,
  gid: 20,
  username: 'aimableniyogakiza',
  homedir: '/Users/aimableniyogakiza',
  shell: '/bin/bash' }
 */
//fs.appendFileSync('greeting.text',`Hello ${user.username}! `);

/***** OutPut including require note.js:
 starting App.
 Starting note.js
 { uid: 501,
   gid: 20,
   username: 'aimableniyogakiza',
   homedir: '/Users/aimableniyogakiza',
   shell: '/bin/bash' } and Hello aimableniyogakiza in file greeting.text
 */

//fs.appendFileSync('greeting.text',`Hello ${user.username}! You are ${notes.age}.`);
/* OutPut: starting App.
Starting note.js
{ uid: 501,
  gid: 20,
  username: 'aimableniyogakiza',
  homedir: '/Users/aimableniyogakiza',
  shell: '/bin/bash' }
and Hello aimableniyogakiza! You are 35 (in file greetings.text)
*/


