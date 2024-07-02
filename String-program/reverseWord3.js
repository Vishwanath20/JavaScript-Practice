function reverseInPlace(str) {
    var words = [];
    words = str.match(/\S+/g);
    console.log('words is::' + words);
    var result = "";
    for (var i = 0; i < words.length; i++) {
        result += words[i].split('').reverse().join('') + " ";
    }
    return result
}

console.log(reverseInPlace("Vishwanath Kumar Pater"))

//Output: htanawhsiV ramuK retaP 