const readlineSync = require("readline-sync");// readline-sync librery

let randomArray = []; 

// generate random number from 1 to 100
function rand100(){
    return Math.floor(Math.random() * 100) + 1;  //returns a random integer from 1 to 10 
    }

//populate the array with random numbers
function multiRand(n){
    for (i=0; i<=n;i++){
        randomArray.push(rand100());
    }
}

// calculate the average value of array elements
function average(arr){
    let avr = 0;
    for (i=0; i<arr.length; i++){
        avr += arr[i];
    }
    avr = avr/arr.length;
    return avr;
}

// find the minimum value of array
function min(arr){
    return Math.min(...arr);
}

// find the maximum value of array
function max(arr){
    return Math.max(...arr);
}

//ask the user to input a number of random array number and call multiRand() function
multiRand(new Number(readlineSync.question("how many number to generate?: ")));

//display the array in a single line
console.log(JSON.stringify(randomArray));

// display the result on console
console.log("the average of the array: " + average(randomArray) + " the min is: " + min(randomArray) + " and the max is: " + max(randomArray));