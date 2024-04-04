function firsRepeating(arr){
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] == arr[j]){
            return arr[j]
        }
    }
}
return -1;
}

var arr = [1,2,2, 50, 3, 4, 30, 50, 6,10];
const index = firsRepeating(arr);
console.log(index);