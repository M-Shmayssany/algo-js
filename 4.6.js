const readlineSync = require("readline-sync");

let value = new Number(readlineSync.question("Enter a value to return the factorial number: "));

let f = [];

function factorial (n) {
    if (n == 0 || n == 1)
        return 1;
    if (f[n] > 0)
        return f[n];
        return f[n] = factorial(n-1) * n;
} 

console.log("answer: " + factorial(value));
