let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];
let total1 = 0;
let total2 = 0;

for (i=0; i<array1.length; i++){
    total1 += array1[i];
}
for (i=0; i<array2.length; i++){
    total2 += array2[i];
}
console.log("the sum of the array1=[1, 2, 3, 4, 5] is :" + total1);
console.log("the sum of the array2=[100, 101, 102] is :" + total2);