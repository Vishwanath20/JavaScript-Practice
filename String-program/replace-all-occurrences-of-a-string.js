//Task: How to replace all occurrences of a string in JavaScript

let str = "Hello world, Hello JavaScript!!"

//Method 1: Using string.replace() method
console.log("------Method 1: Using string.replace() method--");
let newStr = str.replace("Hello", "Welcome")
console.log(newStr);

//Method 2: Using string.replaceAll() method
let str1 = "Hello world, Hello JavaScript!!"
console.log("------Method 2: Using string.replaceAll() method--");
let newStr1 = str1.replaceAll("Hello", "Welcome")
console.log(newStr1);