// const student = {
//     fullName : "Manoj Maske" ,
//     age: 22,
//     cgpa: 8.2,
//     ispass: true

// };

// ! Datatype

// premative -we can store only one value and immutable

// String

// ✅ Primitive Data Types in JavaScript

// String
let user = 'manoj';
const address = "pune"; // 🔧 Fixed typo: "adddress" ➝ "address"
let role = "Developer";

// typeof: To check the datatype of a variable
console.log(typeof user);       // string
console.log(typeof address);    // string (🔧 Fixed: was using .apply by mistake)
console.log(typeof role);       // string

// ✅ String Interpolation

// Old way (concatenation)
console.log("Hello I am " + user + " from " + address);

// Modern way (Template literals - use backticks ` not quotes '')
console.log(`Hello I am ${user} and I am working as ${role} in ${address}`);

// ✅ Number
let salary = 50897.78;
let age = 28;

console.log(typeof salary); // number
console.log(typeof age);    // number

// ✅ Boolean
let isDev = true;
console.log(typeof isDev); // boolean

// ✅ Undefined
let company;
console.log(typeof company); // undefined

// ✅ Null (weird case in JS)
let project = null;
console.log(typeof project); // object ❗ (this is a known JavaScript quirk)

// ✅ BigInt
let data = 98644334n;
console.log(typeof data); // bigint

// ! Operator

// ! Arithimatic Operatoer - +,-,*,%,/.++,--

console.log(10+30);
//console.lof(30 +"30");

console.log(50-9);
console.log(4*50);
console.log(50/3);
console.log(50%9);

let a = 10
console.log(a++);
console.log(a);
console.log(++a);

console.log(a--);
console.log(a);

console.log(--a);

console.log()

//Assignment opretor +,-,*,/,%,++,--

let x = 100

x += 10
console.log(x);

x -=10
console.log(x);

x *=10
console.log(x);

x /=10
console.log(x);

x %= 10
console.log(x);

