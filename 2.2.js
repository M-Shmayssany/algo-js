const readlineSync = require("readline-sync");

let min = readlineSync.question("enter min number?\n:");
let max = readlineSync.question("enter max number?\n:");

if(min>max){
    console.log("ERROR\nattention: your minimum number should be less than the maximum number");
}else{
    let cur = readlineSync.question("enter current number?\n:");
    if (cur >= min && cur <= max){
        console.log("current number is between min and max");
    }else {
        console.log("current number is not between min and max");
    } 
}