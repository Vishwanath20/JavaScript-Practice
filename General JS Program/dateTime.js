let date = new Date();
let toDay = date.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

let hour = date.getHours();
let minutes = date.getMinutes();
let second = date.getSeconds();
let prepand = (hour>=12)?"PM":"AM";

let toDayDate = date.getDate();
var monthlist = ["Jan","Feb","March","April ","May","June","July", "Aug"];
let month = date.getMonth();
let year = date.getFullYear();

console.log(`Today is: ${daylist[toDay]}`);
console.log(`Date is:${toDayDate} ${monthlist[month]} ${month} ${year}`);
console.log(`Time is: ${hour}${prepand}:${minutes}:${second}`);
