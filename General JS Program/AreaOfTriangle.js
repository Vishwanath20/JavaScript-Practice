let length1 = 5;
let length2 = 6;
let length3 = 7;

let length = (length1+length2+length3)/2;
let area = Math.sqrt(length*((length-length1)*(length-length2)*(length-length3)))

console.log(`Area is::${area}`);