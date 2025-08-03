// Using var - hoisted but undefined initially
var name;
console.log(name); // Output: undefined

// Case matters in JavaScript! You used Name (capital) next.
var Name = "Sangram";
console.log(Name); // Output: Sangram

// Reassigning value to Name
Name = "Manoj";
console.log(Name); // Output: Manoj

// Typo alert! 'Nmae' is not defined
// console.log(Nmae); ❌ Error: Nmae is not defined
// FIX:
console.log(Name); // Output: Manoj

// let allows reassignment
let Name1 = "Smita";
Name1 = "Sanjana";
console.log(Name1); // Output: Sanjana

// const cannot be reassigned, but we can combine them
const place = "pune";
const place2 = "Satara";
console.log(place + place2); // Output: puneSatara

// Additional variable declarations
let age = 21;
let weight = 65.78;
let income = 20000000;
let personName = "Manoj";  // Changed 'name' to 'personName' to avoid conflict with earlier var
let isMarried = false;

console.log(age, weight, income, personName, isMarried);
