const userDetails = {
    name: "John Doe",
    age: 14,
    status: {
      verified: false
    }
  };
  
  // Cloning the Object with Spread Operator
  let cloneUser = { ...userDetails };
  
  // Changing the value of cloneUser
  cloneUser.status.verified = true;
  cloneUser.name = "fffff";

  console.log('cloneUser------',cloneUser); // { name: 'fffff', age: 14, status: { verified: true } }
  console.log('userDetails----',userDetails); // { name: 'John Doe', age: 14, status: { verified: true } }

var cloneUser1 = userDetails;
cloneUser1.name = 'vishu';
console.log('cloneUser1------',cloneUser1); //  { name: 'vishu', age: 14, status: { verified: true } }
console.log('userDetails----',userDetails); // { name: 'vishu', age: 14, status: { verified: true } }

  console.log(`typeof'hello'${typeof'hello'}`);
  console.log(`${typeof[{name:'vvv'}]}`);
  console.log(`${typeof{name:'fffffff'}}`);
  console.log(`${typeof null}`);

  console.log('---------SHALLOW COPY EXAMPLE--------------');

  let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
  }
  
  console.log("Employee=> ", employee);
  let newEmployee = employee; // Shallow copy
  console.log("New Employee=> ", newEmployee);
  
  console.log("---------After modification----------");
  newEmployee.ename = "Beck";
  console.log("Employee=> ", employee);
  console.log("New Employee=> ", newEmployee);
  // Name of the employee as well as 
  // newEmployee is changed.
  
  console.log('**********DEEP COPY************');

  let employee1 = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
  }
  console.log("=========Deep Copy========");
  let newEmployee1 = JSON.parse(JSON.stringify(employee1));
  console.log("Employee1=> ", employee1);
  console.log("New Employee1=> ", newEmployee1);
  console.log("---------After modification---------");
  newEmployee1.ename = "Beck";
  newEmployee1.salary = 70000;
  console.log("Employee1=> ", employee1);
  console.log("New Employee1=> ", newEmployee1);
  