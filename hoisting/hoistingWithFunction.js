// let x = 20,
//     y = 10;

// let result = add(x, y);
// console.log(result);

// function add(a, b) {
//     return a + b;
// }

// OutPut:- 30

// ------------------Below with Function Hoisting --------------------------

function add(a, b) {
    return a + b;
}

let x = 20,
    y = 10;

let result = add(x, y);
console.log(result);

// OutPut:- 30

//--------------------------------------

x = 20;
console.log(x);
var x;