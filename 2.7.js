const readlineSync = require("readline-sync");
total = 0;
x = new Number(readlineSync.question("pleas Enter a number of loop :"));
i = 1;
while (i <= x) {
    total = total + new Number(readlineSync.question("pleas Enter a number :"));
    i++;
}

console.log("total: " + total);