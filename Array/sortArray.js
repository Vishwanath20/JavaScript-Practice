 let a = [0,8,5,3,4,7,6,20];
let len = a.length;
let temp=[];
 for(let i=0; i<len; i++)
 {
     for(let j=0; j<len-1; j++){
        if (a[j] > a[j+1]) {
            temp = a[j+1];
            a[j+1]=a[j];
            a[j]= temp;
        }

    //     if (a[i] > a[j]) {
    //         tmp = a[i];
    //         a[i] = a[j];
    //         a[j] = tmp;
    //    }
     }
 }

 for( let n=0; n<len; n++){
     console.log(a[n]);
 }