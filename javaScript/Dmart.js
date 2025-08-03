let pro1 = parseInt(prompt("Enter the frist product price"))
let pro2 = parseInt(prompt("Enter the secound product price"))
let pro3 = parseInt(prompt("Enter the third product price"))
let pro4 = parseInt(prompt("Enter the fourth product price"))
let pro5 = parseInt(prompt("Enter the fifth product price"))

let total = pro1 + pro2 + pro3 + pro4 + pro5
console.log(total);

if(total>=10000) {
    // logic for discount
    document.writeln("Dare costomer you have purchase the product woth "+total+" Rs. congrachulation")

}
else{
    document.writeln("")
}
