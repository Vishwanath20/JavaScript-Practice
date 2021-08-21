let empArray = [];
let count = 0;
function findDuplicate(array){
for (let i = 0; i < array.length; i++) {
    count =1;
    for (let j =i + 1; j < array.length; j++) {
        if(array[i] == array[j]){
            count++;
            empArray.push(array[i]);
        }   
    }   
    console.log(array[i] +":"+ count);
}
return empArray;
}

let array = [1, 2, 5, 1, 2, 1, 5, 8, 7, 8];
let duplicate = findDuplicate(array);
// console.log(duplicate);