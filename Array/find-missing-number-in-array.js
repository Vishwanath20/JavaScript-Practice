//Task: find the missing number in array.

function misNum(arr) {
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);
    let missArr = [];
    for (let i = minValue; i <= maxValue; i++) {
        console.log("arr.indexOf(",i,")",arr.indexOf(i));
        if (arr.indexOf(i) < 0) {
            missArr.push(i)
        }
    }
    return missArr;
}

let arr = [1, 2, 3, 4, 6, 8, 10]
console.log("missing element is:", misNum(arr));