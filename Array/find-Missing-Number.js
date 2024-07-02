const arr = [1,2,3,5,7,8,10];
const missArrayEle = [];
const missingValue =(arr)=>{
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
   // console.log(minValue, maxValue);
    for(let i=minValue;i<=maxValue;i++){
        if(arr.indexOf(i)<0){
            
            missArrayEle.push(i)
        }
    }
    return missArrayEle;
}

console.log(missingValue(arr));