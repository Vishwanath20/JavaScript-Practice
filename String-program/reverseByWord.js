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

//siht si a elpmas gnirts