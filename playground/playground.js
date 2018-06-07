//Node Blocking and Non-Blocking mode.
// We will be using Non-Blocking because that's how Node engine works.
//Blocking

// var getUserSync = require('./getUserSync');
//
// var user1 = getUserSync('123');//waiting on user
// console.log('user1',user1);
//
// var user2 = getUserSync('321');//321 is the id; waiting on user
// console.log('user2', user2);
//
// var sum = 1 + 2;
// console.log('The sum is ' + sum);// this will take 6 secs
//
// //Non-Blocking means can do many things in the same time.
//
// var getUser = require('./getUser');
//
// getUser('123', function(user1){ // non waiting
//     console.log('user1', user1);
// });
//
// getUser('321', function(user2){//non waiting
//     console.log('user2', user2);
// });
// var sum = 1 + 2;
// console.log('The sum is ' + sum);// this will take 3 secs
/*=================================================================*/
/*=============== require ============*/

/***** Use nodejs.org/api/ for more information on modules
* . File systeme. then fs.appendFile(file,data[options], callback)***/

console.log('starting App.');
const os = require('os');
const fs = require('fs'); //we pass in one string, now we have access in all file of fs.
//fs.appendFile('greetings.text','Hello Aima!!');
// i got warning :  DeprecationWarning: Calling an asynchronous function without callback is deprecated.


// in case you run the application and get the error you must use one of the following.
//  fs.appendFile('greetings.txt', 'Hello Aima!!', function(error){
//     if(error){
//         console.log('unable to write file');
//     }
//  }); // non warning.

// Or

//fs.appendFileSync('greetings.txt', 'Hello Aima!!');// non warning,this will not allow any third argument to be added.

/* in nodejs.org we look for os module which will allow us to get userInfo when
 * using os.userInfo([options])*/

var user = os.userInfo();
console.log(user); /* OutPut:{ uid: 501,
  gid: 20,
  username: 'aimableniyogakiza',
  homedir: '/Users/aimableniyogakiza',
  shell: '/bin/bash' }
 */
fs.appendFileSync('greeting.text',`Hello ${user.username}!`);

/*==== npm  =====*/
/*==== package.json=======
 *use 'npm init' in terminal to create package.json
 *
 *
 * ==== lodash package librarie ======
 * then type 'npm install lodash --save'
  * lodash is module package that has a sign of underscore _ is used on each method of lodash
  *  so if you search https://lodash.com/docs/ you will get many method can be used..
  *  for example: _.isString(value) will execute false if the value is not a string.
  *  is better to get much time and read lodash documentation to understand well most of it.
  *  i case you want to post your project to gitHub just remove node_modules file or use gitgnore node
  *  so that willbe loaded, then if someone clone your repository will just run npm install
  *  in the terminal and will install all dependencies like lodash or more automatically.
  *
  *
  *  ========== nodemon ===========
  *  nodemon will watch the files in the directory in which nodemon was started, and if any
  *   files change, nodemon will automatically restart your node application
  *   more on https://www.npmjs.com/package/nodemon
  *   to install it type : npm install nodemon -g
  *   g means is global installation will not be on any files will not change any code.
  *   so any changes you will do on files after saving will run and will show you outputs
  *   is only used on local development it means when we will deploy our app will not be deployed
  *   on the server...
  *   TO SHUTDOWN nodemon use CONTROL + C
  *
  *
  *   =========== PROCESS.ARGV=============
  *   are the arguments we can pass in the terminal like node App.js list
  *   but will not work if we will not use console.log(process.argv) in the App.js
  *   so this is to use commands in the terminal ex: var command process.argv[2];
  *   console.log('Command:', command);
  *    but all these you must stop nodemon to access the terminal
  *    then forExample node App.js list
  *    so you can create command to read or remove...
  *    NB: when passing remove like node App.js remove --title="secrets"
  *    make sure you use double quotes because if u use single quotes will work
  *    on linux and ios but not on windows.......
  *    is better to make sure you use --title=" " because without  = sign will give different results.
  *
  *    ============= YARGS =================
  *    LINK: https://github.com/yargs/yargs
  *    or more on yargs.js.org
  *    install it by typing: npm install --save yargs
  *
  *    Yargs be a node.js library fer hearties trying to parse opstrings.
  *    Yargs helps you build interactive command line tools by parsing arguments and
  *    generate an elegant user interface.
  *
  *    in yargs you can type node App.js add .....
  *    ex:output: Yargs { _: [ 'add', 'Aimable' ],
  *    will work well, also you can type
  *    node App.js --title=secret without quotes
  *    or --title secret ex:output:  '--title','Lesson' ]
  *    will also work well or --title "secret from who" will also work
  *    ex:output:'add',
  *     '--title',
  *     'secret from who' ]
  *     yargs is very flexible
  *
  *     node App.js add --title=".." --body=".." :for adding the notes in notes-data.json
  *     node App.js read --title=".."            :for reading the title and body notes in file.
  *     node App.js remove --title=".."          :for removing note just specify the title.
  *     node App.js list                         :will print all the list of the objects that are in the file.
  *
  *     we use .command to pass in our commands names and info, we can also add .help so that will
  *     provide the information of the commands we use.
  *     to access help type node App.js --help
  *     to access help on specified command ex: node App.js add --help
  *     then instead of repeating the title you can set it to the 't' as alias and use it by typing -t
  *     like node App.js add -t="..."
  *
  *
  *  ====== Json to store information =====
  *  is used to store information using strings and objects
  *
  * ===== Debugging in command line (in terminal) =======
  * use node file_name and extension to get what is the file
  * use node inspect filename and extension
  * first three lines is just to explain you that you are in debugging mode
  * ex:Aimables-Air:playground aimableniyogakiza$ node inspect debugging.js
   < Debugger listening on ws://127.0.0.1:9229/d24d1a12-8008-43b5-bcbe-5cdf7b6cac5e
   < For help see https://nodejs.org/en/docs/inspector
   < Debugger attached.
   Break on start in debugging.js:1
   > 1 (function (exports, require, module, __filename, __dirname) { var person = {
     2     name:"Aimable"
     3 };
       debug>

  * debug> list(10) number of line of your code to be printed as they are in your IDE in the terminal.
  * n = command means next,
  * c = command means continue
  * ctrl + c twice to shut down the debugger.
  * repl = command mean read evaluate print ..
  * (Press Ctrl + C to leave debug repl)
  * following our debugging.js repl follows all it shows the current location of debug line and
  * it tells you if are any error there.
  * debugger;// it means nodes inspector will stop there .i mean in ide code.
  * you can use c to continue.
  * output:Break on start in debugging.js:1
> 1 (function (exports, require, module, __filename, __dirname) { var person = {
  2     name:"Aimable"
  3 };
debug> c
break in debugging.js:5
  3 };
  4 person.age = 100;
> 5 debugger;// it means nodes inspector will stop there .
  6 person.name = "Andrew";
  7
debug> repl
Press Ctrl + C to leave debug repl
> person
{ name: 'Aimable', age: 100 }
>

  * example for debug: node inspect App.js read --title="allo"
  * then press c command it will stop where you put the debugger; line.
  * then use repl
  * then note
  * will print out the title allo data.
  * another example to debug using nodemon:
   nodemon inspect App.js read --title="aima"
  * then press c to continue untill you reached breakpoint
  * so if you do some modifications in the file and save, nodemon will automatically
  * update debug and you can use c to reach the breaking point.
  *
  * ================ Debugger in chrome dev tools ==============
  * we must run these commands
  * node --inspect-brk // this tells it that we want to debug in chrome.not in cmd
  * node --inspect-brk filename and it's extension.
  * it will open automatically the chrome dev tool
  * in case you doesn't open it , type in chrome://inspect/#devices
  * then click at open dev tool.
  * if you click play blue on right  will work as c in cmd.
  * another example using nodemon: nodemon --inspect-brk App.js read --title="aima"
  * will do the same thing and you can use the blue play to continue.
  * you can do breakpoint by clicking online left side then will do breakpoint on that line
  * as debugger, does.
  *
  *
  *    */