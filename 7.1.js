const readlineSync = require("readline-sync");


function randNumber(val){
    return Math.floor(Math.random() * val) + 1;   
}
let guessMe = randNumber(100);
console.log(guessMe);
let guessedNumber = 0;

while (guessedNumber != guessMe){
    guessedNumber = new Number(readlineSync.question("Guess the number: "));
    if(guessedNumber < guessMe){
        console.log("Too low");
    }else if(guessedNumber > guessMe){
        console.log("Too high");
    }
}
console.log("Well guessed!");