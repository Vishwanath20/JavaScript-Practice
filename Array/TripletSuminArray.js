let A = [ 1, 4, 45, 6, 10, 8 ]; 
let sum = 52; 
let arr_size = A.length; 
find3Numbers(A, arr_size, sum); 

function find3Numbers(arr, arr_size, sum){

    for(let i=0;i<arr_size-2;i++){
        for(let j=i+1;j<arr_size-1;j++){
            for(let k=j+1;k<arr_size;k++){

                if(arr[i]+arr[j]+arr[k] == sum){
                    console.log("triplate is::",arr[i], arr[j], arr[k]);
                }
            }
        }
    }
}

