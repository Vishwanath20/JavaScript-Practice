let str = "Vishwanath Kumar Pater";
let revWord = "";
console.log('Actual word is::' + str);
console.log('word length:: ' + str.split('').length);

for (let i = str.length - 1; i >= 0; i--) {
    revWord = revWord + str[i];
}

console.log('reverse Word:: ' + revWord);

// retaP ramuK htanawhsiV
