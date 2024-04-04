// count of given integer occurance
const arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8, 6, 5, 6, 7, 5, 6, 3, 2];
let len = arr.length;
let x = 8;
counter = 0;
for(let i=0; i<len;i++){
if(arr[i] == x){
    counter++;
}
}
console.log(x +" occures "+counter +" times");

// count of every integer occurance
console.log("----------Count Occurance of each integer----------------");

const count = {};

for (let i = 0; i < arr.length; i++) {
let ele = arr[i];
if (count[ele]) {
 count[ele] += 1;
} else {
 count[ele] = 1;
}
}
console.log(count);

// count of every integer occurance using filter
console.log("----------Count Occurance of each integer- using filter---------------");

function counte(arr, element) {
    return arr.filter(
        (ele) => ele == element).length;
};
 
console.log(counte(arr, 1))