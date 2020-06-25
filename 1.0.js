const readlineSync = require("readline-sync");
let operator = ["+", "-", "*", "/", "%"];
let numberT = ";"
let typeOp = readlineSync.question('Enter [ + , - , * , / , % ]: ');
let opr = "";
let numberA = new Number(readlineSync.question('Please enter Number A: '));
let numberB = new Number(readlineSync.question('please enter Number B: '));
switch (typeOp) {
    case '+':
        numberT = numberA + numberA;
        opr = 'Addition';
        break;
    case '-':
        numberT = numberA - numberA;
        opr = "Soustraction";
        break;
    case '*':
        numberT = numberA * numberA;
        opr = "Multiplication";
        break;
    case '/':
        numberT = numberA / numberA;
        opr = "Division";
        break;
    case '%':
        numberT = numberA % numberA;
        opr = "Modulo";
        break;
}


console.log("the " + opr + " of A and B is equal to : " + numberT);