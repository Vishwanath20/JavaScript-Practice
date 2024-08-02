// Input: "My name is Vishwanath"

//-------Reverse string
let str = "My Name Is Vishwanath";
console.log(revStr(str));
function revStr(str){
    let temp = '';
    for(let i=str.length-1;i>=0; i--){
        temp += str[i];
    }
    return temp;
}

//------Reverse by Word in same place-----
let str1 = "My Name Is Vishwanath";
console.log(revStr1(str1));
function revStr1(str1){
    str1 = str1.split(' ');
   
    let temp = '';
    let rev = str1.map((word)=>{
        for(let i=word.length-1;i>=0;i--){
            temp += word[i];
        }
         temp += ' ';
    });
    return temp;
}

//-----Reverse the string word wise---------
let str2 = "My Name Is Vishwanath";
console.log(revStr2(str2));
function revStr2(str2) {
    str2 = str2.split('');
    let temp = '';
    let temp2='';
    for(let i=str2.length-1;i>=0;i--){
        console.log("str2[i]::",str2[i]);
        temp += str2[i];
    }

    let rev = temp.split(' ').map((word)=>{
        for(let i=word.length-1;i>=0;i--){
            temp2 += word[i];
        }
         temp2 += ' ';
    });
    return temp2;
}

//---------
function reverseWords(input) {
    // Split the input string into an array of words
    let wordsArray = input.split(" ");
    
    // Create an empty array to store the reversed words
    let reversedArray = [];
    
    // Use a for loop to iterate over the words array in reverse order
    for (let i = wordsArray.length - 1; i >= 0; i--) {
        console.log("wordsArray[i]", wordsArray[i]);
        reversedArray.push(wordsArray[i]);
    }
    
    // Join the reversed array back into a string
    let output = reversedArray.join(" ");
    
    // Return the resulting string
    return output;
}

// Example usage:
let inputString = "My Name Is Vishwanath";
let result = reverseWords(inputString);
console.log(result); // Outputs: "Vishwanath Is Name My"

//----------Remove duplicate character------
let str3 = "Vishwanath";

// Function to remove duplicate characters
function removeDuplicates(str) {
    let result = "";
    let seen = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!seen[char]) {
            result += char;
            seen[char] = true;
        }
    }

    return result;
}

// Example usage
let result1 = removeDuplicates(str3);
console.log(result1); // Outputs: "Vishwanat"

