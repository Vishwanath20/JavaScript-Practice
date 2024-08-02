let arr = [1,2,3,[4,5,[6,7],8,9],10,11];
console.log(flatArr(arr));

function flatArr(arr){
    let resArr=[];

    function flatNestedArr(arr){
        for(let ele of arr){
            if(Array.isArray(ele)){
                flatNestedArr(ele)
            }
            else{
                resArr.push(ele);
            }
        }
    }

    flatNestedArr(arr);
    return resArr;
}