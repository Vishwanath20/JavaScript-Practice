let user = {};

// set
user["likes birds"] = "Visu";

// get
console.log(user["likes birds"]); // true

// delete
delete user["likes birds"];

let student = {
    name: "Vishu",
    age: 28,
    mobile: 7869235763,
    address: "Bangalore",
}

console.log('***********');
for(data in student) {
    
    console.log(data);
    console.log(student[data]);
}