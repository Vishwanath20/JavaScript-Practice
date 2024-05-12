// Original object
let originalObject = {
    name: "John",
    age: 30,
    address: {
        address1: "Bangalore",
        address2:"Raipur"
    }, 
    calculateSalary: function(){
        return 50000;
    },
    date: new Date()
  };
  
  // Shallow copy using Object.assign()
  let shallowCopy1 = Object.assign({}, originalObject);

  // Modifying the shallow copy
  shallowCopy1.name = "Alice";
  shallowCopy1.address.address1 = "Hydrabad";
  
  // Output
  console.log("Original Object:", originalObject);
  console.log("Shallow Copy1:", shallowCopy1);
  
  let shallowCopy2 = {...originalObject}
  shallowCopy2.address.address1 = "Pune";
   // Output
   console.log("Original Object:", originalObject);
   console.log("Shallow Copy2:", shallowCopy1);
   