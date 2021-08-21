function fact(n){
    let fact=1;
    for(let i=1; i<=n; i++){
        fact = fact*i;
    }
    return fact;
}

let res=fact(5);
console.log('factorial using for loop::'+res);

/* factorial using Recursion */

function fact1(n){
    if(n>0){
        return (n*fact1(n-1));
    }
    else{
        return 1;
    }

}
let res1=fact1(5);
console.log('factorial using recursion::'+res1);