let s = [1, 2, 3, 4, 5]; 
let v = s.filter((n) => n >= 3); 
console.log(v); 

//-----------------------------

let xxxx = []; 
let yyyy = []; 
let zzzz = xxxx + yyyy; 

console.log(`type of xxxx is::${typeof xxxx}`);
console.log(`type of yyyy is::${typeof yyyy}`); 
console.log(typeof zzzz);

//---------------------------------
let xx = "hello"; 
let yy = new String("hello"); 
console.log(`type of xx is::${typeof xx}`);
console.log(`type of yy is::${typeof yy}`);
console.log(xx == yy); 
console.log(xx === yy); 

//--------------------------------------
var str = "my name is vishu";
var strArr = str.split(' ');
console.log(strArr);
strArr.map( data => {
    data.split('').reverse().join('');
    console.log(data);
});
// console.log(strArr);
//-------------------------------------
let x = false; 
let y = "0"; 
let z = 0; 
console.log(false); 
console.log(0 == "0"); 
console.log(x == y); 
console.log(x == z); 
//--------------------------------------
let a = () => { 
    console.log(this); 
  }; 
  a();
//--------------------------------------