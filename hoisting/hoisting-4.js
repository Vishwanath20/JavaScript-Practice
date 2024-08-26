// var arr = [10, 32, 65, 2];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }

//-------------------------------------
var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function(j) {
    return function () {
      console.log('The index of this number is: ' + j)
    };
  }(i), 3000);
}