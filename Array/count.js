
function cntElements(arr, n) {
	let copy_arr = new Array(n);
	for (let i = 0; i < arr.length; i++)
		copy_arr[i] = arr[i];
	let count = 0;
	arr.sort((a, b) => a - b);
	for (let i = 0; i < n; i++) {
		if (arr[i] != copy_arr[i]) {
			count++;
		}
	}
	return count;
}
let arr = [4, 2, 5, 6];
let n = arr.length;

console.log(cntElements(arr, n));
