// Task: find unique characters of a string
// This means that a character occurs once in the string then we cannot include it again.

//Approach 1: Using Naive Approach
console.log("----Approach 1: Using Naive Approach----");
function findUnique(str){
    let empStr = "";
    for(let i=0; i<str.length; i++){
        if(empStr.includes(str[i]) === false){
            empStr += str[i];
        }
    }
    return empStr;
}
console.log(findUnique("Geeksforgeeks"))
console.log(findUnique("Geeksforgeeks Is great"))

//Approach 2: Using the Set
console.log('----Approach 2: Using the Set----');
function findUnique1(str) {
    let res = new Set(str);
    return [...res].join('');
}
console.log(findUnique1("Geeksforgeeks Is great"))

//Approach 3: Using the spread operator and reduce()
console.log('----Approach 3: Using the spread operator and reduce()----');
function findUnique2(str){
    let res1 = [...str].reduce((acc,curr)=>{
        return acc.includes(curr)?acc:acc+curr;
    });
    return res1;
}
console.log(findUnique2("Geeksforgeeks Is great"))

//Approach 4: Using the indexOf() Method
console.log('----Approach 4: Using the indexOf() Method----');
function uniqueCharacters(str) {
    let ustr='';
    for(let i=0;i<str.length;i++){
        if(ustr.indexOf(str.charAt(i))<0){
            ustr += str.charAt(i);
        }
    }
    return ustr;
}
console.log(uniqueCharacters("Geeksforgeeks"));
