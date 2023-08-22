const arr = [1,2,3,4,'Vishwanath'];

arr.push(5);
arr.unshift(0);


for(const item of arr){
    console.log(item);   
}

console.log('----- After Pop() operation ------');
arr.pop();
for(const item of arr){
    console.log(item);   
}

console.log('----- After Shift() operation ------');
arr.shift();
for(const item of arr){
    console.log(item);   
}