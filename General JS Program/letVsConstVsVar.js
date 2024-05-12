console.log('------var example-------');

var a=1;
var a=11;
var a=111;
console.log('--->ouside function()::a::',a);
function dis(){
    var a=222;
   var a=333;
    console.log('--->inside dis()::a::',a)
}
dis();
console.log('--->ouside function()::a::',a);


var greeter = "hey hi";
var times = 4;
function dd(){
    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    
};
dd();

console.log(greeter) // "say Hello instead"

console.log('********let example ********');

let b=10;
//let b=20; // syntax error: 'b' already declared
console.log('-->Outside function()-b::',b);
function print(){
    
    let b = 30;
    
    b=40;
    console.log('-->inside function()-b::',b);
}
print();
console.log('-->Outside print()-b',b);

