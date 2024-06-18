// Task: Perform the Deep Cloning with any inbuilt method. 
var obj = {
    name:"vishu",
    mobile:"ddd",
    fullname:{
        fName:"vishwanath",
        mName:"Kumar",
        lName:"Pater"
    }
}

function deepClone(obj){
    if(obj === null || typeof obj !== "object"){
        return obj;
    }
    initialValue = Array.isArray(obj) ? []:{};
    var clonedObj = Object.keys(obj).reduce((acc, key)=>{
       acc[key] = deepClone(obj[key]);
      return acc;
    },initialValue);
    return clonedObj;
}

deepClone(obj);