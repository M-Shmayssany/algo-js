const readlineSync = require("readline-sync");

//the function for calcSurface
function calcSurface(width, length){
    return width * length
}

let width = new Number(readlineSync.question("please enter the width value: "));    //ask user for input
let length = new Number(readlineSync.question("please enter the length value: "));  //ask user for input

// call the function calcSurface and display the output to the user
console.log("the surface is: " + calcSurface(width, length));