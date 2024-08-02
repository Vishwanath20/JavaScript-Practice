//----------Remove duplicate
let arr = [1,2,3,4,3,2,4,5,63,3];
console.log(remveDup(arr));

function remveDup(arr){
    let uniqueArr = [];
    for(let i=0;i<arr.length;i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

//----------Count Occurance of element
let arr1 = [1,2,3,4,3,2,4,4,5,5,5,5,63,3];
console.log(countOccurance(arr1));

function countOccurance(arr1){
    let uniqueArr = [];
    let obj = {};
    for(let i=0;i<arr1.length;i++){
        if(obj[arr1[i]]){
            obj[arr1[i]] = obj[arr1[i]]+1
        }
        else{
            obj[arr1[i]] = 1
        }
    }
    return obj;
}
//------Sort arr let arr1 = [1,2,3,4,3,2,4,4,5,5,5,5,63,3];

let arr3 = [1,2,3,4,3,2,4,4,5,5,5,5,63,3];
console.log(sortArr(arr3));
function sortArr(arr3){
    let temp = [];
    for(let i=0;i<arr3.length;i++){
        for(let j=i+1;j<arr3.length;j++){
            if(arr3[i]>arr3[j]){
                temp = arr3[i];
                arr3[i] = arr3[j];
                arr3[j] = temp;
            }
        }
    }
    return arr3;
}

//------------
let a = 10
fn(a);
function fn(a) {
    a = 20;
    console.log(a); //20
}
console.log(a); //10

//---------
let ar1 = [1, 2, 3, 4, 5];
let c ="90";
console.log(typeof c);
fn(ar1);
function fn(ar1) {
    let b = ar1;
    b[1] = 9990;
    console.log(b) // [1, 90, 3, 4, 5];
}
console.log(ar1); // [1, 90, 3, 4, 5];