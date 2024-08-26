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

//-----------------------------

//Revese Sentense

let str = "My name is Rani";
console.log(revStr1(str));


function revStr1(str){
  //  str = str.split(' ');
    console.log(str);
     res = [];
    for(let i=str.length-1;i>=0;i--){
      //  console.log(str[i]);
       //res.push(str[i])
       res += str[i]
    }
   return res;
}

//---------------REV BY WORD -------------------
let str1 = "My name is Rani";
console.log(revByWord(str1));
function revByWord(str){
    str = str.split(' ');
    console.log(str);
    res = [];
    let rev = str.map((word)=>{
       // console.log(word);
        for(let i=word.length-1;i>=0;i--){
           
             res.push(word[i]);
          }
          res.push(' ');
    });
   return res.join('');
}

//-------------REMOVE DUPLICATE--------------
let a = [1,2,1,2,1,45,68,68,56,2];
let t = [];
for(let i=0; i<a.length; i++){
 for(let j=i; j<=a.length;j++){
    if(a[i] != a[j]){
        t.push(a[j])
    }
 }   
}
console.log(t);