const str = 'this is a sample string';
console.log('------------1st Method-----------');
const reverseWords = str => {
    let reversed = '';
    reversed = str.split(" ").map(word => {
        return word.split("").reverse().join("");
    }).join(" ");
    return reversed;
};
console.log(reverseWords(str));

//----------------- 2nd Method ---------------------
console.log('------------2d Method-----------');

function revWord() {
    let sent = "This is Vishwanath";
    //  let sentense = sent.split("");

    reversed = sent.split(" ").map(word => {
        return word.split("").reverse().join("");
    }).join(" ");
    return reversed;
}
console.log(revWord());