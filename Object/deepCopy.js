// Original object
let originalObject = {
    name: "John",
    age: 30,
    address: {
        address1: "Bangalore",
        address2: "Raipur"
    }, 
    calculateSalary: function(param) {
        return 50000;
    },
    birthday: new Date(1992, 5, 10) // Date instance
};

// Deep copy using JSON.stringify() and JSON.parse()
let deepCopyObject = JSON.parse(JSON.stringify(originalObject));

// Modifying the deep copy
deepCopyObject.name = "Alice";
deepCopyObject.address.address1 = "New York"; // Modifying nested object
deepCopyObject.birthday ="1995"; // Modifying Date instance

// Output
console.log("Original Object:", originalObject);
console.log("Deep Copy Object:", deepCopyObject);
