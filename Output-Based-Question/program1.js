const array = [10, 20, 30, 40];
const result = array.map((num) => num / 2).filter((num) => num >= 15);
console.log(result);

//-----------------------------

console.log(x);  // undefined
var x = 5; 
console.log(x); // 5
console.log(y); //ReferenceError: Cannot access 'y' before initialization
let y = 10; 
console.log(y); 


//-------------------------

var value = 1; 
function hello() { 
  console.log('value is: ' + value);   //value is: undefined
var value = 3; 
  return value + 1; 
}  
console.log('hello is ' + hello()); //  hello is: 4

//-----------------------------

let value = 1; 
function hello() { 
//  console.log('value is: ' + value);   //ReferenceError: Cannot access 'value' before initialization
let value = 3; 
  return value + 1; 
}  
console.log('hello is ' + hello()); //  

//------------------------------

for (var i = 0; i < 10; i++) {  
    setTimeout(function() {  
      console.log('var ', i); 
    } , 1000); 
  } 

  // var 10
  //var 10
  //var 10
  //var 10

  //-------------------------------

for (let i = 0; i < 10; i++) {  
    setTimeout(function() {  
      console.log('var ', i); 
    }, 1000);
}
//-----------------------------------

let a = 3;
let b = new Number(3);
console.log(typeof b);
let c = 3;

console.log(a == b); // true
console.log(a === b);//false
console.log(b === c);//false

//------------------------------