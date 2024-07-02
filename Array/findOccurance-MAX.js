let arr = [3,2,3,4,1,4,4,5,5];

let convertArrToObj = convertArrToObj(arr);
console.log(convertArrToObj);
function convertArrToObj(arr){
    var obj={};
    var maxVal = 0;
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]] = obj[arr[i]]+1
        }
        else{
            obj[arr[i]] = 1;
        }
    }
    return obj;
}

console.log(Object.entries(convertArrToObj));

let max = Object.entries(convertArrToObj).reduce((a,b)=>a[1]>b[1]?a:b);

// Destructure the result to get the key and value separately
const [maxKey, maxValue] = max;

console.log(`Max Key: ${maxKey}`);
console.log(`Max Value: ${maxValue}`);
