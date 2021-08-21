
function a( callback) {
    setTimeout( function() {
        console.log('result of a()');
        callback();
    }, 1000);
    
}

function b( callback) {
    setTimeout( function() {
        console.log('result of b()');
         callback();
    }, 500);
    
}

// a();
// console.log('a is done!');

// b();
// console.log('b is done!');

a( () => {
    console.log('a is done!');

    b( () => {
        console.log('b is done!');
    });
});