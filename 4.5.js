let Pa = [-7, -4];
let Pb = [17, 6.5];

function calcDistance(a,b){
return Math.sqrt(Math.pow(a[1]- b[1], 2) + Math.pow(a[0]- b[0], 2));
}


console.log(calcDistance(Pa,Pb));