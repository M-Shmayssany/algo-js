const readlineSync = require("readline-sync");

let age = readlineSync.question("what is your age?\n:");

if (age >= 18){
    console.log("You are an adult");
}else{
    console.log("You are not yet an adult");
}