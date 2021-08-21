let arr = ['monday', 'tueday', 'wednesday', 'thrusday','thrusday','thrusday','thrusday',
 'friday', 'tueday', 'monday', 'wednesday'];
let count={};
    for(let j=0; j<arr.length; j++){
        count[arr[j]] = count[arr[j]] ? count[arr[j]] + 1: 1;
    }

console.log(count);