function mySort(arr) {
    let onoff = false;
    while (!onoff) {
        onoff = true;
        for (let i = 1; i < arr.length; i += 1) {
            if (arr[i - 1] > arr[i]) {
                onoff = false;
                let tmp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = tmp;
            }
        }
    }

    return arr;
}

let numbers = [12, 10, 15, 11, 14, 13, 16];
mySort(numbers);
console.log(numbers);