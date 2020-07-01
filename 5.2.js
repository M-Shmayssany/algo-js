const readlineSync = require("readline-sync");

let myObject = {};
let nextObject = {};

function randomizeCast(tvSerie) {
    return tvSerie.sort(() => Math.random() - 0.5);
  }

function askTvSerie(){
    myObject.name = readlineSync.question("what is the name of your favorite TV serie: ");
    myObject.Production_year = readlineSync.question("what is the Production year: "); 
    myObject.Names_cast_members = [];
    let Cname = readlineSync.question("what is the name of a cast member: ");
    while (Cname != ""){
        myObject.Names_cast_members.push({"name": Cname}); 
        Cname = readlineSync.question("what is the name of a cast member: ");
    }


console.log(JSON.stringify(myObject));

}

askTvSerie();

nextObject.name = readlineSync.question("what is the name of your next TV serie: ");
nextObject.Production_year = readlineSync.question("what is the Production year: ");
nextObject.Names_cast_members = myObject.Names_cast_members;
randomizeCast(nextObject.Names_cast_members);
console.log(JSON.stringify(nextObject));