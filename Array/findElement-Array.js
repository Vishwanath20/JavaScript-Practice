// Task - find element from Array.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1. Linear Search Algorithm (Naive approach):
function checkEle(element){
    for(let i = 0; i<num.length; i++){
        if(num[i] == element){
            return element + "is present in array"
        }
    }
     return element +" is not present in array.";
}
console.log(checkEle(9));

// 2.  Using indexOf() function:
console.log('------- Using indexOf() function:--------');
let ele = 41;
if(num.indexOf(ele)>0) 
    console.log(ele + " is present.");
else
    console.log(ele + " is not present.");


//3. filter() Method:
console.log('------using filter() Method:---------');
console.log(check(2));
function check(ele){
    let ans = num.filter( x => x == ele);
    if(ans.length)
        return ele +" is present in array";
    else
        return ele +" is not present";
}