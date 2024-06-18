//Task: find MIN and MAX value for array

//-----Approch:1--using sort()---------------
function findMinMax(arr){
    console.log('-----Approch:1--using sort()');
    let arrSort = arr.sort((a,b)=>{
        return a-b
    });
    return arrSort[arrSort.length-1]
}
console.log(findMinMax([1,2,4,3,67,89,54,56,444,33,2222]));


//-----Approch:2--using reduce()---------------
function findMinMax1(arr){
    console.log('-----Approch:1--using sort()');
    let arr1 = arr.reduce((a,b)=>{
        return (a>b?a:b);
    });
    return arr1;
}
console.log(findMinMax1([1,2,4,3,67,89,54,5556,444,33,2222]));

//-----Approch:3--  finD MIN using reduce()---------------
function findMin(arr){
    console.log('-----Approch:3-- finD MIN using reduce()');
    let arr1 = arr.reduce((a,b)=>{
        return (a<b?a:b);
    });
    return arr1;
}
console.log(findMin([1,2,4,3,67,89,54,5556,444,33,2222]));