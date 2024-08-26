//Task: flat the array and remove duplicate elememnt from Array.
let arr = [1, 2, [1, 2, 3, [1, 3, 4, 5]]];
let fArr = flatArr(arr);
let uniqueArr = removeDuplicate(fArr);
console.log(uniqueArr);

function removeDuplicate(fArr){
    let empArr=[];
    fArr.forEach(ele=>{
        if(!empArr.includes(ele)){
            empArr.push(ele)
        }
    });
    return empArr;
}

function flatArr(arr, empArr = []) {
    arr.forEach(element => {
        if (Array.isArray(element)) {
            flatArr(element, empArr);  // Recursively flatten
        } else {
            empArr.push(element);  // Push non-array elements
        }
    });
    return empArr;
}