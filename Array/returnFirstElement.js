function first(arr, n) {
    console.log(`arr is:: ${arr}`);
    console.log(`n is:: ${n}`);
  if (arr == null) {
      return void 0;
  }
  if (n == null) {
      return arr[0];
  }
  if( n < 0) {
      return [];
  }
  if( arr !=null && n>0) {
      return arr.slice(0, 2);
  }

}

console.log(`1st output -->:  ${first([1, 2, 3], 1)}`);
console.log(`2nd output -->:  ${first([1, 2, 3])}`);
console.log(`3rd output -->:  ${first([1, 2, 3]), -3}`);