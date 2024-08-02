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

//----------------

class Goat {
    static colorChange(newColor) {
      this.newColor = newColor;
      return this.newColor;
    }
  
    constructor({ newColor = 'green' } = {}) {
      this.newColor = newColor;
    }
  }
  const abcd = new Goat({ newColor: 'purple' });
  console.log(Goat.colorChange('orange'));
  console.log(abcd.colorChange('orange'));

  //------------
  if (0) {
    console.log('This will not be logged');
  }
  else{
    console.log("0 is falsy value so can't go inside if()");
  }

  //-------------

  var obj = "ABC";
  var objNew = obj;
  obj = "xyz";
  console.log(objNew);