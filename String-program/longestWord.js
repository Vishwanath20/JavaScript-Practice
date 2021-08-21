function longestWord(str) {
    let words = str.split(" ");
    let longestWrod = "";
    for( let word of words) {
        if(word.length > longestWrod.length) {
            longestWrod = word;
        }

    }
    return longestWrod;
}

let str = "This is today evening";
console.log('longest word is::'+longestWord(str));