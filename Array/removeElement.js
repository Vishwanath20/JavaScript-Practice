let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let indexEle = arr[5];

console.log('--------first method----------');
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == indexEle) {
        // shifting elements
        for (let j = i; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];
        }
        break;
    }
}
for (let i = 0; i < arr.length - 1; i++) {
    console.log(" " + arr[i]);
}

console.log('--------2nd method---using arr.splice()-------');

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let res = arr2.splice(3,2);
console.log('---res----',res);
console.log('------arr2 is-----',arr2);
