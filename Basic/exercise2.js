let firstno = parseFloat(prompt("Enter first num: "));
let operator = prompt("Enter operator (+, -, *, /):");
let secondno =parseFloat(prompt("Enter second num: "));
let calcResult;

if (operator === "+") {
    calcResult = firstno + secondno;
} else if (operator === "-") {
    calcResult = firstno - secondno;
} else if (operator === "*") {
    calcResult = firstno * secondno;
} else if (operator === "/") {
    calcResult = firstno / secondno;
} else {
    calcResult = "Invalid operator";
}

alert("Result: " + calcResult);