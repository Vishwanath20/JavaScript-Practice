var str = "my name is vishu";

var strArr = str.split(' ');

console.log(strArr);

strArr.map( data => {
    data.split('').reverse().join('');
    console.log(data);
});
// console.log(strArr);