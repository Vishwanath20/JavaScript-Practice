// Task:

// Given an array, the task is to cyclically rotate the array clockwise by one time. 

// Input: arr[] = {1, 2, 3, 4, 5}
// Output: arr[] = {5, 1, 2, 3, 4}

function rotate(a,n){

    var last_ele = a[n-1];
    for(let i = n-1; i>0; i--){
        a[i] = a[i-1]
    }
    a[0] = last_ele;

    return a;
}

var a = [1,2,3,4,5];
var n = a.length;
console.log(rotate(a,n));

for(let j=0;j<n;j++){
    console.log(a[j]);
}