let arr = [21,3,2,4,5,1,7,6,66,8];
console.log(findMinMax(arr));

function findMinMax(a){
    let len = a.length;
    let ele;
    for(let i=0;i<len;i++){
        console.log(a[i]);
        if(i<len){
        if(a[i]<a[i+1]){
            ele = a[i];
        }else{
            ele = a[i+1]
        }
    }
        console.log('ele:',ele);
    }
    return ele;
}