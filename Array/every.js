var ever = [10,20,30,40];
var everr = ever.every(function(index,value){
    return value>5;
})
console.log('evry is::'+everr);

var fil = ever.filter(function(index,value) {
    return value>20;
})
console.log('filter is ::'+fil);

var spl = [10, 20, 30, 40, 50];
console.log('SLICE is::'+spl.splice(1,3));
console.log('splice is::'+spl.splice(1,3));

var m=[1, 2, 3];
let area = [];
let are;
for(let i=0; i<m.length; i++){
    are=m[i]*5;
    area.push(are);
}
console.log('area::'+area)  

console.log('--below is using map--');

let mm=m.map(function(value, index){
    return value*5;
})
console.log('AREA mm is:::'+mm);