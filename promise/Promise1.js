var myPromise = new Promise(function(MyReject, myResolve) {
    let x = 1;
    if (x == 10) {
        myResolve("x is 10");
    } else {
        MyReject("x is not 10");
    }
});

myPromise
    .then(function(value) {
        console.log(".then called");
        console.log(value);

    })
    .catch(function(rejectValue) {
        console.log(".catch called");
        console.log(rejectValue);
    });