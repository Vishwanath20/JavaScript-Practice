// Input:  "This is Book";
//Output:  sihT si kooB 

let str = "This is Book";

function revStr(str){
    let s = str.split(" ");
    let rev = "";
   // console.log(s);
    let r = s.map((word)=>{
        //console.log(word.length);
        for(let i=word.length-1;i>=0;i--){
                rev = rev+word[i];
        }
        rev = rev + " ";
     //   console.log(rev);
        // return rev;
    });
    return rev;
}

console.log(revStr(str));