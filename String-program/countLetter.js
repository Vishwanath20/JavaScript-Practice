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

function countDuplicates(str) {
    str = str.toLowerCase();

    // Create an object to keep track of character counts
    const charCount = {};

    // Iterate over the string and update the counts in the object
    for (const char of str) {
        if (charCount[char]) {
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
        }
    }

    // Count the number of characters that appear more than once
    let duplicateCount = 0;
    for (const count of Object.values(charCount)) {
        if (count > 1) {
            duplicateCount++;
        }
    }

    return duplicateCount;
}

const inputString = "Indbivisibility";
const result = countDuplicates(inputString);
console.log(result); // Output: 1

//---------------------------------------------

let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);