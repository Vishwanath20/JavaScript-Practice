// Arrow Function will treat as normal variable with variable initialization

let x = 20,
    y = 10;

let result = add(x, y);
console.log(result);

var add = (x, y) => x + y;

//OutPut:- TypeError: add is not a function