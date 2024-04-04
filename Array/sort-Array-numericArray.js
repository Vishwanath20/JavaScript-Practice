var arr = [1, 50, 3, 4, 30, 4,6,50,3, 6,10];

let arr_size = arr.length;

//---------method 1 using for loop--------
function sortArray(arr, n){
    console.log('---------method 1 using for loop--------');
    let temp = [];
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n-1;j++){
            if(arr[i]>arr[j]){
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
let sortArr = sortArray(arr, arr_size);
console.log(sortArr);

//----------------method 2 using arr.sort()---------
console.log('--------method 2 using arr.sort()---------');
var arr2 = [1,20,40,67, 50, 3, 4, 30, 4,6,50,3, 6,10];
console.log('arr is::',arr2);
let sortArr1 = arr2.sort((a,b)=>{
    return a-b;
});
console.log("2nd method - Sort Array is::" + sortArr1);