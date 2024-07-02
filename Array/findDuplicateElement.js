function findDuplicate(arr) {
    let empArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                // count++;
                // console.log('duplicate element is::'+arr[j]+':'+count);
                empArr.push(arr[j]);
            }
        }
    }
    return empArr;
}

let arr = [1, 2, 3, 2, 5, 6, 3];
let duplicate = findDuplicate(arr);
console.log(duplicate);
/* --------------------------------------------------------------- */
function getDuplicateArrayElements(arr) {
    var sorted_arr = arr.slice().sort();
    var results = [];
    for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] === sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }
    return results;
}

var colors = ["red", "orange", "blue", "green", "red", "blue"];
var duplicateColors = getDuplicateArrayElements(colors); //["blue", "red"]
console.log(duplicateColors);

//--------------------------------------------------------------
/* fiind the duplicate element using empty object */
var colors = ["red", "orange", "blue", "green", "red", "blue"];
const isThereADuplicate = findDup(colors);


function findDup(colors) {
    var empObj = {};
    for (var i = 0; i < colors.length; i++) {
        if (empObj[colors[i]] === undefined) {
            empObj[colors[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}

console.log(isThereADuplicate);

//-----------------------------------------
const arrNum = [1,2,3,1,2,3,4,6,5,4,5];
const dup = arrNum.filter((ele,index,arr)=>{
   return arr.indexOf(ele)!== index
});
console.log(dup);