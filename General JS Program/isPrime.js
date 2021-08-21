const num = 6; // find prime number between 1 to 10
let isPrime = true;

for (var i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(`${num} is prime number`);
} else {
    console.log(`${num} is not prime number`);
}

/* find prime number between given range from 1 to 15 */

console.log(`find prime number between given range from 1 to 15`);
console.log(` Please Wait .....`);
console.log(` Please Wait ..........`);
console.log(` Please Wait .....`);

const startNum = 2;
const endNum = 15;

for (let i = startNum; i <= endNum; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (flag == 0) {
        console.log(i);
    }
}