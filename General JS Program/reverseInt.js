var num = 123456789;

var str = num.toString();
console.log(str);
rev = '';
for (let index = str.length-1; index >=0; index--){
    rev = rev+str[index]
}
console.log(rev);