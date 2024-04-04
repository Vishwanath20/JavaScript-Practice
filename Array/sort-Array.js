var arr = [1, 50, 3, 4, 30, 4,6,50,3, 6,10];
let arr_size = arr.length;

let sortArr = sortArray(arr, arr_size);


function sortArray(arr, n){
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

console.log(sortArr);