const readlineSync = require("readline-sync");

let numberA  = new Number(readlineSync.question('Please Enter a first integer number A: '));
let numberB  = new Number(readlineSync.question('Please Enter a second integer number B:'));

NumberT = numberA % numberB;
console.log("the rest of division A and B is: " + NumberT);