// Task:

// Given an array of N integers, and an integer K, the task is to find the number of pairs of integers in the array whose sum is equal to K.

// Examples:  

// Input: arr[] = {1, 5, 7, -1}, K = 6
// Output:  2
// Explanation: Pairs with sum 6 are (1, 5) and (7, -1).

function countPair(a,n,sum){
    var count = 0;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(a[i]+a[j] == sum){
                count++;
            }
        }
    }
    return count;
}

var a = [1,1,1,1];
var sum = 6;
console.log(countPair(a,a.length,sum));
