const readlineSync = require("readline-sync");

let  positInt = new Number(readlineSync.question("enter a positive integer: "));

function getDivisors(n){
    let holder = [];
    let message = "it's a prime number";
    for (i = 2; i < n; i++){
        if (n%i == 0) {
            holder.push(i);
        }
    }
     if(holder.length == 0){return message;}else{return holder;}
}


console.log(getDivisors(positInt));