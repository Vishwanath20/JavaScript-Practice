// Task - Find a peak element which is not smaller than its neighbours

var findPeak =(arr, n) =>{
    for(let i =1; i<n-1; i++){
        if(arr[i]>=arr[i-1] && arr[i]>=arr[i+1])
            return arr[i]
    }
}

var arr = [1, 3, 20, 4, 1, 0];
var n = arr.length;

console.log(findPeak(arr,n));

//-----------------------------------------------------------------------
let numArr = [20, 30, 40, 50]; 
//numArr.splice(1, 3);
console.log(numArr);
numArr.splice(1, 0, 3, 4, 5); 
  
console.log(numArr); 

// Declare and initialize array 
let strArr = ["amit", "sumit", "anil"]; 
  
// Delete two elements starting from index 1 
// and add three elements. 
strArr.splice(1, 2, "Geeks", "Geeks1", "Geeks2"); 
  
console.log(strArr);
