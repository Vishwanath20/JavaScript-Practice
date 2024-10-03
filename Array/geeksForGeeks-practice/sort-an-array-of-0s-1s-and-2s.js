// Input: {0, 1, 2, 0, 1, 2}
// Output: {0, 0, 1, 1, 2, 2}
// Explanation: {0, 0, 1, 1, 2, 2} has all 0s first, then all 1s and all 2s in last.

//----1st approach using sort()
// let arr = [0, 1, 2, 0, 1, 2];
// console.log(arr.sort());


//-------2nd approach using for loop

let a = [0, 1, 2, 0, 1, 2];
let empArr=[];
let c0 = 0;
let c1 = 0;
let c2 = 0;
let n = a.length;
for(let i=0; i<n; i++){
    if(a[i]==0){
        c0 = c0+1;;
    }
    else if(a[i] == 1){
        c1 = c1+1;
    }
    else if(a[i] == 2){
        c2 = c2+1;
    }
}

for(let i=0;i<c0;i++){
    empArr.push(0)
}
for(let i=0;i<c1;i++){
    empArr.push(1)
}
for(let i=0;i<c2;i++){
    empArr.push(2)
}

console.log(empArr);
