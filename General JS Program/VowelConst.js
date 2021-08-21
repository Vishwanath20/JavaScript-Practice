/**
  Problem link : https://www.hackerrank.com/challenges/js10-loops/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
*/

let inputString ="javascriptloops";
let len = inputString.length;
let strToArray = inputString.split('');
let vowel = 'aeiou';
var consonants ='';
for( let i=0; i<len; i++) {
    if(vowel.includes(strToArray[i])) {
        console.log(strToArray[i]);
    }
    else {
        consonants += strToArray[i] + '\n';
    }
}
console.log(consonants);