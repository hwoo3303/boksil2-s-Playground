// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: `);

// 2. Numeric operators
console.log(1 + 1);     // add
console.log(1 - 1);     // substract
console.log(1 / 1);     // divide
console.log(1 * 1);     // multiply
console.log(5 % 2);     // remainder
console.log(2 ** 3);    // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;

x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operators
console.log(10 < 6);    // less than
console.log(10 <= 6);    // less than or equal
console.log(10 > 6);    // greater than
console.log(10 >= 6);    // greater than or equal

// 6. Logical operatoers : ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`);

// && (and)
console.log(`or: ${value1 && value2 && check()}`);

// ! (not)
console.log(!value1);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if(nullableObject != null){
//     nullableObject.somthing;
// }

function check(){
    for(let i = 0; i < 10; i++){
        // wasting time
        console.log('waste');
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);  // true
console.log(stringFive != numberFive);  // false

// == strict equality, no type conversion
console.log(stringFive === numberFive);  // false
console.log(stringFive !== numberFive);  // true

// object equality by feference
const boksil1 = { name: 'boksil', age: 20 };
const boksil2 = { name: 'boksil', age: 20 };
const boksil3 = boksil1;

console.log(boksil1 == boksil2);    // false
console.log(boksil1 === boksil2);   // false
console.log(boksil1 === boksil3);   // true

// equality - puzzler
console.log(0 == false);            // true
console.log(0 === false);           // false
console.log('' == false);           // true
console.log('' === false);          // false
console.log(null == undefined);     // true
console.log(null === undefined);    // false

// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if(name === 'boksil'){
    console.log('Welcome!!');
} else if(name === 'coder'){
    console.log('amazing coder!!');
} else{
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === 'boksil' ? 'yse' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';

switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love it!!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is trythy
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i - 2){
    console.log(`inline variable for : ${i}`);
}