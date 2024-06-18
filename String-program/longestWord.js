function longestWord(str) {
    let words = str.split(" ");
//    console.log(words);  // [ 'This', 'is', 'today', 'evening' ] convert into Array
    let longestWrod = "";
    for (let word of words) {
       // console.log("word is-- " + word);
        if (word.length > longestWrod.length) {
            longestWrod = word;
            console.log('longestWord::' + longestWrod)
        }

    }
    return longestWrod;
}

let str = "This is today evening";
console.log('longest word is::' + longestWord(str));