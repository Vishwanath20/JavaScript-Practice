// Input: arr[] = {1, 2, 4, 6, 3, 7, 8} , n = 8
// Output: 5
// Explanation: Here the size of the array is 8, so the range will be [1, 8]. The missing number between 1 to 8 is 5
let arr = [1, 2, 4, 6, 3, 7, 8];
let n = 8;
console.log(findMissingNumber(arr,n));

function findMissingNumber(arr,n){
    let sum = 0;
    for(let i=0;i<n-1;i++){
        sum = sum+arr[i];
    }
    let expectedSum = (n*(n+1))/2;
    return expectedSum-sum;
}
