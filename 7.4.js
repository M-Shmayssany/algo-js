const readlineSync = require("readline-sync");
const fs = require('fs');
const fileName = './pizzaFlavorsList.txt';

let Flavors = [];

function addToFile(val, fileName){
    fs.writeFileSync(fileName, [...val], function (err) {
        if (err) return console.log(err);
        console.log('Saved!');
    });
}

function readFromFile(fileName){
    let fileContent = fs.readFileSync(fileName).toString('utf-8');
    let arrayFromFile = fileContent.split(",");
    return arrayFromFile;
}

// delete from array
function deleteFlav(ch, arr){
    arr.splice(ch-1,1)
}

console.log("Hello! Welcome to the Pizza Flavors Manager.\n");
console.log("Please choose your actions:\n1 - List all the pizza flavors\n2 - Add a new pizza flavor\n3 - Remove a pizza flavor\n4 - Exit this program");

Flavors = [...readFromFile(fileName)];
let A = "";

let answer = parseInt(readlineSync.question("Enter your action's number: "))

while (answer != 4 ){
    
    if(answer == 0){

    console.log("Please choose your actions:\n1 - List all the pizza flavors\n2 - Add a new pizza flavor\n3 - Remove a pizza flavor\n4 - Exit this program");
    answer = parseInt(readlineSync.question("Enter your action's number: "))
    }
    
    switch (answer) {
        case 1:
            // display the list of manu
            for ( i=0; i<readFromFile(fileName).length; i++){
            console.log((i + 1) + ". " + readFromFile(fileName)[i]);
            }
            answer = 0;            
            break;
        case 2:
            A = readlineSync.question("Enter Flavor name: ");
            Flavors.push(A);
            addToFile(Flavors,fileName);
            A = "";
            answer = 0; 
            break;
        case 3:
            D = readlineSync.question("Enter Flavor number: ");
            deleteFlav(D,Flavors);
            addToFile(Flavors,fileName);
            answer = 0; 
            break;
        case 4:
            answer = 4;
            console.log("bye bye!");
            break;
    
        default:
            process.exit(1);
    }

}