function calc(n) {
    let r= 0;
    for (let i=0; i<n; i++) {

        setTimeout( function() {
            r=10;
        }, 100)

        setTimeout( function() {
            r=r+i;
        }, 150)
    }
        setTimeout( function() {
            console.log(r);
        }, 500)
    }


calc(5);