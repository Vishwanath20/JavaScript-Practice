/* Array Sorting */
let a= [1, 5, 2, 9, 3];
let temp=[];
for( let i=0; i<a.length; i++){
	for(let j=0; j<a.length-1; j++){
  	if(a[j]<a[j+1]){
      temp = a[j+1];
      a[j+1]=a[j];
      a[j] = temp;
    }
  }
}
for(let k=0; k<a.length; k++){
	console.log(a[k]);
}
