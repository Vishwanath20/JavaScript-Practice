const array = [10, 20, 30, 40];
const result = array.map((num) => num / 2).filter((num) => num >= 15);
console.log(result);
//-------------------------------------
let x = { b: 1, c: 2 };
let y = Object.keys(x);
console.log(y); //[ 'b', 'c' ]
console.log(y.length); //2
//-------------------------------------

function foo(a, b) {
    console.log(arguments[0]);
}
foo(3);

//-------------------------------------

console.log([]+[])

//------------how to empty an array--------
var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
 //arrayList = [];
 arrayList.length = 0;
 console.log('arrayList::',arrayList)

 //-----------------

 var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees);