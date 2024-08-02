
let findLongestConseqSubseq =(arr,n) => {
    let ans = 0; count = 0;
    let startindex = 0;
    let endindex = 0;
     arr = new Set(arr);

     arr = Array.from(arr);
    
    arr.sort(function(a,b)  {
        return a-b;
    })

   console.log(arr);
    for(let i=0;i<n;i++){
        if(i>0 && arr[i] == arr[i-1]+1){
            count++;
            //console.log('insde if - startindex::',i-1);
            if(count == 1){
                startindex = i-1;
            }
            endindex = i;
        }
        else{
            count = 1;
        }
        ans = Math.max(ans,count)
    }

    console.log('startindex::',startindex);
    console.log('endindex::',endindex+1);
    let consecutiveSubseq = arr.slice(startindex, endindex+1);
    console.log(consecutiveSubseq);
    return ans;
}

let arr = [1,15, 2, 2, 3,4,8,7,8,6,10,7,16,9];
let n = arr.length;
console.log(findLongestConseqSubseq(arr, n));

//findLongestConseqSubseq(arr, n)