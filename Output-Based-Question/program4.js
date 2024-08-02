/**
 * input:
dateinfo = "22/07/2024";

output: 
day: 22
month: 07
year: 2024
 */

let date = "22/09/3034";

let dateSplit = date.split('/');

console.log(dateSplit);
console.log('dd:',dateSplit[0]);

//--------------

for(var i=0;i<=5;i++){
	setTimeout(()=>{
		console.log(i)
	},1000);
}

//-------------------

for(var i=0;i<5;i++){
    (function(i){
        setTimeout(()=>{
            console.log(i);
        },1000);
    }(i))
}

//------------GENERATOR FUNCTION ------------------

function* printNumbers() {
    let num = 1;
    while (num<=10) {
      yield num++;
    }
  }
  
  const generator = printNumbers();
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  