//Task - iterate on array

let arr = ['a','b','c','d'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// using forloop
console.log('--iteration using for loop');
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

//Using forEach() Method
console.log('------Using forEach() Method----');
arr.forEach(myfun);

function myfun(item, index){
    console.log('item:',item);
    console.log('item',index);
}