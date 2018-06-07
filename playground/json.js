// ex of taking an object and convert it in a string.
var obj = {
     name: 'Aimable'
 };
var stringObj = JSON.stringify(obj);// we pass a string object to make sure will be a string
console.log(typeof stringObj); //typeof string will take all in string types.
console.log(stringObj);
/* OutPut:
string
{"name":"Aimable"}
*/

// convert string in an object.
var personString = '{"name": "Aimable","age": 35}';
var person = JSON.parse(personString);// this JSON.parse will convert personString in an object.
console.log(typeof person);
console.log(person);
/* OutPut:
object
{ name: 'Aimable', age: 35 }
*/

const fs = require('fs');
//===== section save info ====
var originalNote ={
    title: 'Some title',
    body: 'Some body',
    accountNumber: 230908
};
/*====OriginalNoteString===
* in fs we must pass two arguments and the file will be json extension ex:'notes.json'
 */

//=== section convert in string and create file notes.json ====
var originalNoteString = JSON.stringify(originalNote); //convert in a string
fs.writeFileSync('notes.json', originalNoteString);// we write in file called notes.json the title and body of original note.

//==== Section read  ====

var noteString = fs.readFileSync('notes.json');//we read in file
var note = JSON.parse(noteString);//convert noteString in object.
console.log(typeof note);// we confirm the type of note.
console.log(note.title);// we call note title which will be the title in original note.
console.log(note.body);// we call note body ......
console.log(note.accountNumber);