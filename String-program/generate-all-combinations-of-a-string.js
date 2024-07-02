// generate all combinations of a string

//Approach 1: Use .push() and .slice() method
console.log('---Approach 1: Use .push() and .slice() method---')


var possibleCombinations = (str)=>{
    let empArr = [];
    let empArr1=[];
    
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){
            empArr.push(str.slice(i,j));
          //  console.log("push:",empArr);
            empArr1.unshift(str.slice(i,j));
          // console.log("unshift:",empArr1);
        }
    }
    
    return empArr;
}

console.log(possibleCombinations('Dog'));