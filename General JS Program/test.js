function outer() {
    var count = 0;

    return function inner() {
        count++;
        console.log(count);
    }
}

var call1 = outer();
call1();
call1();