const readlineSync = require("readline-sync");

let fibNumber = new Number(readlineSync.question("Enter a number: "));

let phi = (1 + Math.sqrt(5)) / 2;
function Fibonacci(n){
    return Math.round(Math.pow(phi, n)/ Math.sqrt(5));
}
console.log(Fibonacci(fibNumber));