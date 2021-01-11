// Use strict
// added in ES5
// use this for vanilla Javascript.
// var를 무분별하게 사용하는걸 방지
'use strict';

// Variable
// let (added in ES6)
// mutable
// ES6부터 지원되는 let과 const는 블록 스코프를 철저히 지킴
let name = 'hwoo3303';
console.log(name);
name = 'hello';
console.log(name);

// const 
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// Variable types
// primitive(더 이상 쪼개질 수 없는 타입), single item : number, string, boolean, null, undefinded, symbol
// object(single item을 여러개 묶어서 한 박스 단위로), box container
// function(다른 데이터 타입처럼 할당이 가능, 파라미터로 전달 가능, 리턴 가능), first-class function
let a = 1;      // number(integer)
let b = 1.5;    // number(decimal number)

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt(fairly new, don't use it yet) : 숫자 끝에 n을 붙이면됨(크롬이랑 파이어폭스만 지원)
const bigInt = 12345678901234567890123456789012345678901234567890n;  // over (-2^53 ~ 2^53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;      // template literals (string)

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1;     // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects 
// 고유한 식별자가 필요하거나 동시다발적으로 일어나는 작업코드에서 우선순위를 주고싶을때
// 동일한 값으로 Symbol을 만들어도 서로 다른 값임
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);   // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(symbol1 === symbol2);   // true
// console.log(`value: ${x}, type: ${typeof x}`); // 심볼은 바로 출력하면 에러남
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);

// Dynamic typing : dynamically typed language
// JS는 선언할 때 어떤 타입인지 결정하지 않고 런타임때 할당된 값에 따라서 타입이 변경될 수 있음
let text = 'hello';
console.log(text.charAt(0));    // 'h'
console.log(`value: ${text}, type: ${typeof text}`);    // hello, string
let text = 1;
console.log(`value: ${text}, type: ${typeof text}`);    // 1, number
let text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);    // 75, string
let text = '8' + '2';
console.log(`value: ${text}, type: ${typeof text}`);    // 4, number
console.log(text.charAt(0));    // TypeError

// object, real-life objectm data structure
// 한번 할당된 object는 다른 object로 할당이 불가능하나 내부 변수는 다른 값으로 할당 가능
const ellie = { name: 'hwoo3303', age:20 };

// JS, TypeScript difference
// 1. 타입스크립트는 JS 위에 타입을 올림
// 2. JS는 브라우저가 이해할 수 있는 실시간 언어
// 3. 타입스크립트는 트랜스 컴파일러를 이용해야함