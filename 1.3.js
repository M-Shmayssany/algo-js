const readlineSync = require("readline-sync");

let userName = readlineSync.question('Please Enter your first name please?');
console.log("Hello " + userName);