//the function for rand10()
function rand10(){
return Math.floor(Math.random() * 10) + 1;  //returns a random integer from 1 to 10 
}

// call the function rand10() and display the output to the user
console.log("The random number between 1 and 10 is: " + rand10());