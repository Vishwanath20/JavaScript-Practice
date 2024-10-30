// Given an array arr[] of N distinct elements and a number K, where K is smaller than the size of the array.
//Find the K’th smallest element in the given array.
// Examples:
// Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 3 
// Output: 7

let arr = [7, 10, 4, 3, 20, 15];
let K = 3;
//console.log(findKthSmallestNumber(arr));
findKthSmallestNumber(arr, K);

function findKthSmallestNumber(arr, K){
    let len = arr.length;
    let sortArr = arr.sort((a,b)=>{
        return a-b;
    });
    for(let i=0; i<len; i++){
        if(i === K-1){
            console.log(arr[i]);  
        }
    }   
}

