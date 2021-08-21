var promise = new Promise(function(resolve, reject) {
    const x = "geeksforgeeks1";
    const y = "geeksforgeeks"
    if (x === y) {
        reject();
        console.log('Success, You are a GEEK2');
    } else {
        resolve();
        console.log('Some error has occured');
    }
});

promise.
then(function() {

}).
catch(function() {

});