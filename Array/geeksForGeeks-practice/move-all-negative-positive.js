// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
console.log(moveAllNegative(arr));

function  moveAllNegative(arr) {
    let n = arr.length;
    let c0=0;
    let c1;
    let empArr = [];
    let empArr2 = [];
    for(let i=0; i<n; i++){
        if(arr[i]<0){
            empArr.push(arr[i]);
        }else{
            empArr2.push(arr[i]);
        }
    }

    return empArr.concat(empArr2);
}