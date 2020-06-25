const readlineSync = require("readline-sync");

let name = readlineSync.question('Please Enter your last name please?');
let firstName = readlineSync.question('Please Enter your first name please?');
let city = readlineSync.question('Please Enter your city name please?');

console.log("My name is " + firstName + " " + name + " and I live in " + city + ".");