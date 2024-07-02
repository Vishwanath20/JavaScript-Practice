let people = [
    {name:"vishu", age:"30"},
    {name:"Ram", age:"29"},
    {name:"Ram2", age:"29"},
    {name:"Neha", age:"28"},
    {name:"Viru", age:"27"},
    {name:"Viru2", age:"27"}
]

function groupBy(arr){
    let obj = {};

    arr.forEach(item => {
       // console.log(item);
        if(!obj[item.age]){
            
            obj[item.age] = [item];
        }
        else{
            obj[item.age].push(item);
        }
    });
    return obj;
}

console.log(groupBy(people)); 