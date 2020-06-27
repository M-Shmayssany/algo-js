const readlineSync = require("readline-sync");

while ( new Number(readlineSync.question("chose a number : ")) != 42) {
    console.log("Are you sure?\ntry again.");
}

console.log("you did it!");
