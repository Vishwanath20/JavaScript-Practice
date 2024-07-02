//Task: Get the Character of a Specific Position.

//Method 1: Using String charAt() Method

console.log("------Using String charAt() Method-----");
let str = "Geeks for Geeks";
let index = 10;
let ctr = str.charAt(index);
console.log("Character at " + index 
    + "th position is: " + ctr);

//-------------------------------------------
//Method 1: Using String subStr() Method
console.log("--- Using String subStr() Method-----");
let str1 = "Geeks for Geeks";
let index1 = 11;
let ctr1 = str1.substring(index1);
console.log("Character at " + index1
    + "th position is: " + ctr1);

//Method 3: Using Square Bracket Notation
console.log("--Method 3: Using Square Bracket Notation---");
let str2 = "Geeks for Geeks";
let index2 = 11;
let ctr2 = str2[index2]
console.log("Character at " + index2
    + "th position is: " + ctr2);