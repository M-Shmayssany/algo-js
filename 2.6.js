const readlineSync = require("readline-sync");

let weekDays = ["Sunday", "Monday", "Tuesday", "wednesday", "thursday", "friday", "saturday"];

let answer = new Number(readlineSync.question("please enter number between 1 and 7 :"));

if(answer >= 1 && answer <= 7){
    console.log(weekDays[answer - 1]);
}