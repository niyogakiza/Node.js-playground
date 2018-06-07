var square = (x) =>{
    var result = x * x;
    return result;
};
console.log(square(9));

// equivalent
 var squareB = (x) => x*x;
console.log(squareB(9));
//======================================================================
var user = {
    name: 'Andrew',
    sayHi: () =>{
        console.log(`Hi.I'm ${this.name}`);// this prints Hi.I'm undefined
    },
    sayHiAlt (){
        console.log(arguments);
        console.log(`Hi.I'm ${this.name}`);// this prints Hi. I'm Andrew
    }
};
//user.sayHi();//this prints Hi.I'm undefined
//user.sayHiAlt();//this prints Hi. I'm Andrew
user.sayHiAlt(1,2,3,4);// output:{ '0': 1, '1': 2, '2': 3, '3': 4 } Hi.I'm Andrew



