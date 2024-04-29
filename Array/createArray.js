// Task - Create an array of given size in JavaScript

let arr = new Array(5);
console.log(arr.length);
console.log(arr)  // [ <5 empty items> ]


let arr1 = Array.apply(null, Array(5)).map( function(){});
console.log(arr.length); //5
console.log(arr1); // [ undefined, undefined, undefined, undefined, undefined ]