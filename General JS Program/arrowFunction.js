let xx = 1000;

function x() {
    console.log('inside outer - ' + xx);
    let abc = () => {
        a = 100;
        console.log(xx);
    }
    abc();
}

x();