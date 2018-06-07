//console.log('Starting note.js');

const fs = require('fs');

// This fetchNotes will avoid that we will repeat the same codes in all functions
var fetchNotes = () =>{
    try{

        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);// this will create an object.
    }catch(e) {
        return [];
    }
};

// this avoid repeating same code in other functions
var saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {
    var notes = fetchNotes();// Multiple notes
    var note = //individual notes
        {
            title,//es6
            body
        };

    // avoid duplications
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);//pushing note to notes array.
        saveNotes(notes);// callback to access the writeFileSync.
        return note;
    }

    // this will avoid that when we add file will create again the first one.

};

var getAll = () =>{
    return fetchNotes();
    //console.log('Getting all notes');
};
// THIS WILL REMOVE THE OBJECT WE ADD, TYPE:ex node App.js remove --title=""
var removeNote = (title) =>{
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

var readAll = (title) =>{
    var notes = fetchNotes();
    var filteredNote =  notes.filter((note) => note.title === title);
    return filteredNote[0];

};

var logNote = (note) =>{
    //debugger;
    console.log('_______');// for the space
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports =
    {
        //addNote: addNote
        addNote, //es6
        getAll,
        removeNote,
        readAll,
        logNote

    };

// module.exports.addNote = () =>{
//     console.log('addNote');
//     return 'New note';
// };























//======== WAS FOR THE LESSONS ============

//console.log(module);
/** OutPut: Starting note.js
 Module {
  id: '.',
  exports: {},
  parent: null,
  filename: '/Users/aimableniyogakiza/WebstormProjects/nodePlayground/note.js',
  loaded: false,
  children: [],
  paths:
   [ '/Users/aimableniyogakiza/WebstormProjects/nodePlayground/node_modules',
     '/Users/aimableniyogakiza/WebstormProjects/node_modules',
     '/Users/aimableniyogakiza/node_modules',
     '/Users/node_modules',
     '/node_modules' ] }
 */ // we will use exports
// this export will export age in other file where we will request it using require of this file.
//module.exports.age = 35;



// module.exports.add = (a, b) =>{
//     return a + b;
// };
