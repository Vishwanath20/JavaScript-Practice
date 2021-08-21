let arr = [10,20,30];

/** 1st method**/
console.log('using length method() arr length is::'+arr.length);

/** 2nd method**/
let len = findLength(arr);
console.log('length without length method(), arr length is::'+len);

function findLength(arr){
    let length=0;
    while (arr[length]!=undefined) {
        length++;
    }
    return length;
}