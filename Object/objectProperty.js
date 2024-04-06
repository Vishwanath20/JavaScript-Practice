var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student)

console.log(student.name);

console.log(student["name"]);

// Creating js objects with object literal
let car = {
	name : 'GT',
	maker : 'BMW',
	engine : '1998cc'
};
// Property accessor
console.log(car.name); // GT dot notation
console.log(car['maker']); //BMW bracket notation
//console.log(car[maker]);  //-------ReferenceError: maker is not defined




let x = '{ "b": 1, "c": 2 }'; 
let y = JSON.parse(x); 
console.log( y); // { b: 1, c: 2 }
console.log(typeof y); //object

