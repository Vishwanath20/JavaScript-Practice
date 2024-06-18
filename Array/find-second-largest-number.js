// Task: find second largest number from array.

const arr = [5,6,1,2,8,7,3,22,44,55,99,70];
console.log(arr.sort((a,b)=>a-b));
let firstLarge = Math.max(...arr);
let index = arr.indexOf(firstLarge);
arr.splice(index,1)
let secondLarge = Math.max(...arr);
console.log(firstLarge);
console.log(secondLarge);