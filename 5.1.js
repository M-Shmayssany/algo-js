const readlineSync = require("readline-sync");

let myObject = {}
i = 0;
function askTvSerie(){
    myObject.name = readlineSync.question("what is the name of your favorite TV serie: ");
    myObject.Production_year = readlineSync.question("what is the Production year: "); 
    myObject.Names_cast_members = [];
    let Cname = readlineSync.question("what is the name of a cast member: ");
    while (Cname != ""){
        
        myObject.Names_cast_members.push({"name": Cname}); 
        Cname = readlineSync.question("what is the name of a cast member: ");
    }
console.log(myObject);
}

askTvSerie();
