let array = [100, 101, 102, 103, 104];
let arrayClone1 = [];
let arrayClone2
// the first method using push()

for (i=0; i<array.length; i++){
    arrayClone1.push(array[i]);
}


// the secong method using [...array]

arrayClone2 = [...array];

console.log("by using push() :" + arrayClone1);
console.log("by using [...array] :" + arrayClone2);