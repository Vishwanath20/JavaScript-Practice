function findDup(arr) {
    let empArr = [];
    let len = arr.length;
    let c=0;
    for(let i = 0; i<len; i++){
        for(let j = i+1; j<len; j++){
            if(arr[i] === arr[j]){
                empArr.push(arr[j]);
                c++;
            }
        } 
    }
    return empArr;
}

let arr = [1,2,3,5,2,1,3,4,6,5];
let res = findDup(arr);
console.log(res);