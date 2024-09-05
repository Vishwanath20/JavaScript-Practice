// input [1,2,3,4]
//output [24,12,8,6]

let arr = [1,2,3,4]
console.log(modifyArr(arr));
//---- 1st technique------------
function modifyArr(arr){
    let empArr=[];
    let n = arr.length;
    for(let i=0; i<n; i++){
          let sum = 1;
        for(let j=0; j<n; j++){
            if(i != j){
                sum = sum * arr[j]
            }
        }
        empArr.push(sum);
    }
    return empArr;
}

//----------------2nd technique-----------
let arr1 = [1,2,3,4]
console.log(findMultiply(arr1));

function findMultiply(arr1){
    let product = 1;
    let n = arr1.length;
    let empArr = [];
    for(let i=0;i<n; i++){
        product = product*arr1[i];
    }
    for(let j=0;j<n; j++){
        let productEle = product/arr1[j];
        empArr.push(productEle)
    }
    return empArr;
}











