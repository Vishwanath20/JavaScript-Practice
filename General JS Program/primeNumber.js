number = 6;

if ( number === 1 ) {
    console.log("neither prime or composite number");
}

isprime=true;
for(let i=2; i<number; i++) {
    if(number%i == 0){
        isprime=false;
        break;
    }
}

if(isprime){
    console.log('number is prime');
}
else{
    console.log('number is not prime');
}