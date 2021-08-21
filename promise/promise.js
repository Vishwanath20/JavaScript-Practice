function job() {
    return new Promise(function (r, s) {
        r();
    });
}

let promise = job();

promise
    .then(function () {
        console.log("success");
    })

    .catch(function() {
        console.log("Eroor");
    } )