// Input: arr1[] = {11, 1, 13, 21, 3, 7}, arr2[] = {11, 3, 7, 1} 
// Output: Yes

function isSubset(arr1, arr2, m, n){
    let found = false;
for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        if(arr1[i] === arr2[j]){
            found = true;
        }
    }
}
if(!found){
    return false;
}
else{
    return true;
}
}

const arr1 = [11, 1, 13, 21, 3, 7];
const arr2 = [11, 3, 7, 1];
const m = arr1.length;
const n = arr2.length;

if (isSubset(arr1, arr2, m, n)) {
  console.log("Yes");
} else {
  console.log("No");
}