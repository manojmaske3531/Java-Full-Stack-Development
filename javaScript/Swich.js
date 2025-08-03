let op = prompt('Enter the operator');
let num1 = 20;
let num2 = 10;

switch(op) {
    case "+":
        document.writeln(`The result is ${num1 + num2}`);
        break;
    case "-":
        document.writeln(`The result is ${num1 - num2}`);
        break;
    case "*":
        document.writeln(`The result is ${num1 * num2}`);
        break;
    case "/":
        document.writeln(`The result is ${num1 / num2}`);
        break;
    case "%":
        document.writeln(`The result is ${num1 % num2}`);
        break;
    default:
        document.writeln('Invalid operator');
}
