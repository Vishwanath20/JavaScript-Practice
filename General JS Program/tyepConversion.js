let value = true;
console.log(typeof value);

let str = String(value);
console.log(typeof str);

let num = Number(str);
console.log(typeof num +":"+num);

let x = 1;
x = -x;
console.log(x);

let y = 1;
console.log(+y);
console.log(+y);

let hour = 9;
if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}

let height = 10;
let width = null;
// important: use parentheses
// let area = (height ?? 100) * (width? 50);

console.log(height || 100);
console.log(height ?? 100);
