let arr=['a','b','b','a','c'];
let res = getUnique(arr);
console.log(res);

function getUnique(arr){

    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){ 
            if (i != j && arr[i] == arr[j]) 
                break; 
        if (j == arr.length) 
            return arr[i]; 
    } 
    }
    return -1;

    // for(let i=0; i<arr.length; i++){
    //     for(let j=0; j<arr.length; j++){
    //         if(arr[i] === arr[j] && i!=j){
    //             break;
    //         }
    //         if(j=arr.length){
    //             return arr[i];
    //         }
    //     }
    // }
    // return -1;
}