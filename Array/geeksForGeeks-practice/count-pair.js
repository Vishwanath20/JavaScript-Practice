// Input: arr[] = {1, 5, 7, -1, 5}, target = 6
// Output:  3
// Explanation: Pairs with sum 6 are (1, 5), (7, -1) & (1, 5).         

let arr = [1, 5, 7, -1, 5];
let target = 6;
console.log(countPair(arr, target));

function countPair(arr,target){
    let n = arr.length;
    let count = 0;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(arr[i]+arr[j] == target){
                count = count+1;
            }
        }
    }
    return count;
}
