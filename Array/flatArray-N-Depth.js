let arr = [1,2,3,[4,5,[6,7,[8,9,[25,89,[53,25,[4,51]]]]],8,9],10,11];
let depth = 2;
console.log(flatArr(arr, depth));

function flatArr(arr,depth){
    let resArr=[];
    flatNestedArr(arr,depth);
    function flatNestedArr(arr,depth){
        for(let ele of arr){
            if(Array.isArray(ele) && depth>0){
                flatNestedArr(ele, depth-1)
            }
            else{
                resArr.push(ele);
            }
        }
    }
    return resArr;
}