
function isArray(arr) {
    if(Array.isArray(arr)){
        return true;
    }
    else {
        return false;
    }
}

console.log(isArray([1, 2, 3]));
console.log(isArray('vishu'));