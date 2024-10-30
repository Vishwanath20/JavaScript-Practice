// Find a peak element which is not smaller than its neighbours

// Input: arr[]= {5, 10, 20, 15}
// Output: 20
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

// Input: arr[] = {10, 20, 15, 2, 23, 90, 90}
// Output: 20 or 90
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20, similarly 90 has neighbors 23 and 67.

// Input: arr[] = [1, 1, 1]
// Output : 1
// Explanation: All elements are peak in the given array, we can return any of them,

// let arr = [5, 10, 20, 15];
let arr = [10, 20, 15, 2, 23, 90, 90, 1,3,2];
console.log(findPickElement(arr));

function findPickElement(a){
    let len = arr.length;
    let ele = [];
    for(let i=0; i<len; i++){
        console.log(a[i]);
        if((a[i]<=a[i+1]) && (a[i+1]>=a[i+2])){
            ele.push(a[i+1])
        }
    }
    return ele;
}