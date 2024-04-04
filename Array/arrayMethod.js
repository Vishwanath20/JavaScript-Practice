//------------------ 1. array.reduce()-----------------------------------
const arr = [1,2,5,3,4,6,4,7,8,9,5,6,7,4,3,4,6,8,9,3]
console.log('--------Sum of Array using reduce()----------');
let sum = arr.reduce((sum, val)=>{
    return sum+val;
});
console.log('---------sum::',sum);

//---------------------2. filter()-----------------------------------
console.log('--------filter element which is greter than 7 ----------');
let res = arr.filter((val,index)=>{
    return val>7;
});
console.log('res::',Array.from(new Set(res)));