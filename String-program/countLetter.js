str = "Vishwanath";
str1 = {};

function getCount(str) {
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i]);
        const ch = str[i];

        if (!str1[ch]) {
            str1[ch] = 0;
        }
        str1[ch]++;
    }
    return str1;
}
console.log(getCount("Vishwanath"));
//--------------------------------------------------------------------------------------------------

/* 2nd method */

// var str = "My name is John Smith";
// var str = [1, 2, 5, 4, 1, 2, 3, 5, 6];
// //str=str.toLowerCase();
// var empObj = {};
// var ch, counter, actualLength, count;
// for (counter = 0, actualLength = str.length; counter < actualLength; ++counter) {
//     // ch = str.charAt(counter);
//     ch = str[counter];
//     count = empObj[ch];
//     empObj[ch] = count ? count + 1 : 1;
// }
// for (ch in empObj) {
//     if (ch != ' ')
//         console.log(ch + " : " + empObj[ch]);
// }