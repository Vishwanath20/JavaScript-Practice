//str = "Geeks for Geeks";

function revString(str) {

    if (!str || str.length < 2 || typeof str != 'string') {
        return 'Not a Valid String';
    }

    const revArray = [];
    const len = str.length - 1;
    for (let i = len; i >= 0; i--) {
        revArray.push(str[i]);
    }
    return revArray.join('');
}

console.log(revString("My Name is Vishwanath"));

//htanawhsiV si emaN yM