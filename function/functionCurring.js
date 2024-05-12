/* 
let add = (a,b,c)=>{
    return a+b+c;
}
console.log(add(1,2,3));
*/
/************************************************* */
 let add = (a)=>{
    return (b)=>{
        return (c)=>{
           return a+b+c;
        }
    }
 }

 console.log(add(1)(2)(3));