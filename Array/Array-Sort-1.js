let arr = [1, 5, 3, 6, 2, 8, 7, 3, 2, 9];
let len = arr.length;
let sortArr = arr.sort();
console.log("1st method - Sort Array is::" + sortArr);

console.log("Arr length is::" + len);

let empArr = [];
for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
        if (arr[i] > arr[j]) {
            empArr = arr[j];
            arr[j] = arr[i];
            arr[i] = empArr;
        }
    }
}

console.log("-------2nd method------");
for (let k = 0; k < len; k++) {
    console.log(arr[k]);
}