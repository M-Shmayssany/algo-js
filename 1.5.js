const readlineSync = require("readline-sync");

let numberA  = new Number(readlineSync.question('Please Enter a first decimal number A: '));
let numberB  = new Number(readlineSync.question('Please Enter a second decimal number B:'));
numberA = Math.round(numberA);
NumberT = numberA * numberB;
console.log("the multiplication of A and B is: " + NumberT);