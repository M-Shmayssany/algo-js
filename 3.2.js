let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];
let average1 = 0;
let average2 = 0;
let sum1 = 0;
let sum2 = 0;

for (i=0; i<array1.length; i++){
    sum1 += array1[i];
}

average1 = sum1/array1.length;

for (i=0; i<array2.length; i++){
    sum2 += array2[i];
}

average2 = sum2/array2.length;

console.log("the average of the array1=[1, 2, 3, 4, 5] is :" + average1);
console.log("the average of the array2=[100, 101, 102] is :" + average2);