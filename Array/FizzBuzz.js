
function fizzBuzz(n1, n2) {
	for(let i=n1; i<=n2; i++) {
        
        let find3 = i.toString().indexOf('3') > -1;
        let find5 = i.toString().indexOf('5') > -1;
        if(find3) {
            console.log('Fizz');
            continue;
        } else if(find5){
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
let N1 = 1;
let N2 = 10;

fizzBuzz(N1, N2);
