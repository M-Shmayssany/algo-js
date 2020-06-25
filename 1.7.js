const readlineSync = require("readline-sync");

let shoeSize  = new Number(readlineSync.question('what is you shoe size: '));
let birthYear  = new Number(readlineSync.question('what is you birth year:'));
Total = ((((shoeSize*2)+5)*50)-birthYear)+1766;
total = shoeSize*2;
total = total+5;
total = total*50;
total = total - birthYear;
total = total + 1766;


console.log(Total);
console.log(total);