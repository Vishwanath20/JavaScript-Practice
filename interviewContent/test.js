/* console.log(x); //// undefined
var x = 5; 
console.log(x); // 5
//console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10; 
console.log(y); // 10 */

/********************************************************************************/
/*var value = 1; 
function hello() { 
  console.log('value is ' + value);    // value is undefined === bcz of local var value declaration, hoisting
  var value = 3; 
  return value + 1; 
}  
console.log('hello is ' + hello()); */

/******************************************************************************** */
/*for (var i = 0; i < 10; i++) {  
    console.log('var ' + i); 
}
// output - var 0-9 
*/

/************************************************************************************** */
/*for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log('var ' + i);
    }, 1000);
}  // output - 10 times - var 10
*/

/******************************************************************************** */
/*
for (const i = 0; i < 10; i++) {  
    console.log('const ' + i);   
} 
// output - 0
// TypeError: Assignment to constant variable.
*/
/*************************************************************** */

