let arr = [1,2,3,4,5];
console.log(revArr(arr));

function revArr(arr){
    let n=arr.length;
    let empArr=[];
    for(let i=n-1;i>=0;i--){
        empArr.push(arr[i])
    }
    return empArr;
}