// Input: a[] = {1, 1, 2, 2, 2, 4}, b[] = {2, 2, 4, 4}
// Output: {1, 2, 4}
let a = [1, 1, 2, 2, 2, 4];
let b = [2, 2, 4, 4]
let c = Array. from(new Set(a.concat(b)));
console.log(c);