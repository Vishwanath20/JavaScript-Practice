// Task: find the maximum product of two elemement
// [1,2,3,4,5]  output is : 20  i.e. 4*5 = 20

// var arr = [3,8,1,10,3,40,5]   //output: 400

var arr = [1,2,3,4,5]   // output: 20
function maxProduct(arr){
    var maxProduct = arr[0]*arr[1];
    for(let i=0; i<arr.length;i++){
        for(let j=i+1; j<arr.length;j++){
            product = arr[i]*arr[j];
            if(product>maxProduct){
                maxProduct = product;
            }
        }
    }
    return maxProduct;
}

console.log(maxProduct(arr));