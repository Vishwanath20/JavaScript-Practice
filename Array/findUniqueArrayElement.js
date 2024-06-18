// let arr = [1, 2, 3, 1, 2, 3, 5, 4, 6, 2]
// let len = arr.length;
// let empArr = [];
// for (let i = 0; i < len; i++) {
//     if (empArr.indexOf(arr[i]) === -1) {
//         empArr.push(arr[i])
//     }
// }
// console.log(empArr);

//------------------------ 2nd Method ----------------------

// let a = [1, 2, 3, 1, 2, 3, 5, 4, 6, 2]
// let len = a.length;
// let b = [];

// a.sort();

// let temp;

// for (let i = 0; i < len; i++) {
//     if (a[i] !== temp) {
//         b.push(a[i]);
//         temp = a[i];
//     }
// }
// console.log(b);

// ----------------------- 3rd ---------------

let a = [1, 2, 3, 1, 2, 3, 5, 4, 6, 2];
obj = {};
for (let i of a) {
    obj[i] = true;
}
let b = Object.keys(obj);
console.log(b);