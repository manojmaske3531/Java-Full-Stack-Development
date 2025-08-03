// Logical Opretor

// let a = 6;
// let b = 5;

// console.log("cond1 && cond2 =",a<b && a ===6);

// &&-- true-- all are true
console.log(2<9 && 40>=90 && 10===10);
console.log(2<=9 && 400>90 && 10 === 10);

// || ---true--if all are ytru or any one is true
console.log(5>90 || 30>=1000 || 30!= 10 ||2>=1);
console.log(5>90 || 30>1000 || 30== 10 || 2<=1);

// !--teru --false
let a = 10
console.log(!(a===1000));

// ternary operatoer
// (condition )? true stmt : false stmt
let age = 100
let res = (age>18)? document.writeln('you are eligble to vote ') : document.writeln('not eligible to vote');
