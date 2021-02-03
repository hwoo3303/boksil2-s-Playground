function printHello(){
    console.log('Hello');
}

printHello();

function printHello(message){
    console.log(message);
}

log('Hello');

function changeName(obj) {
    obj.name = 'coder';
}

// Parameters
const boksil2 = { name: 'boksil2'};
changeName(boksil2);
console.log(boksil2);

// Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!!');

// Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}

printAll('Alice', 'Bob', 'Carol');

// Local scope
let globalMessage = 'global';   // global variable
function printMessage(){
    let message = 'Hello';
    console.log(message);   // local variable
    console.log(globalMessage);

    function printMessageChild(){
        let childMessage = 'Hello';
        console.log(childMessage);   // local variable
        console.log(message);
    }
}

// Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    }
}