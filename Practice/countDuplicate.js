// let arr = ['aa', 'bb', 'cc', 'aa', 'bb'];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             count++;
//             console.log(count);
//         }
//     }
// }

// // console.log('Number of duplicte element in array is::' + count);

// ///---------------------------------------------------------------

// function findDuplicate(arr) {
//     let empArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 empArr.push(arr[j]);
//             }
//         }
//     }
//     return empArr;
// }
// let arr = [1, 2, 3, 2, 5, 6, 3];
// let duplicate = findDuplicate(arr);
// console.log(duplicate);

// //------------------------

// var colors = ["red", "orange", "blue", "green", "red", "blue"];
// const isThereADuplicate = findDup(colors);

// function findDup(colors) {
//     var empObj = {};
//     for (var i = 0; i < colors.length; i++) {
//         if (empObj[colors[i]] === undefined) {
//             empObj[colors[i]] = 1;
//         } else {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(isThereADuplicate);

//------------------------

// console.log('Newwwwww');
// const findDuplicates = (arr) => {
//     let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
//     // JS by default uses a crappy string compare.
//     // (we use slice to clone the array so the
//     // original array won't be modified)
//     let results = [];
//     for (let i = 0; i < sorted_arr.length - 1; i++) {
//         if (sorted_arr[i + 1] == sorted_arr[i]) {
//             results.push(sorted_arr[i]);
//         }
//     }
//     return results;
// }

// let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
// console.log(`The duplicates in ${duplicatedArray} are ${findDuplicates(duplicatedArray)}`);

//---------------------------------
// function findDuplicate(arr) {
//     let count = 0;
//     let empArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 count++;
//                 empArr.push(arr[j]);
//             }
//         }
//     }
//     console.log('Number of duplicte element in array is::' + count);
//     return empArr;
// }
// let arr = [1, 2, 3, 2, 5, 6, 3];
// let duplicate = findDuplicate(arr);
// console.log(duplicate);


//----------------------------SORT ARRAY -------------------------
// let arr = [11, 4, 2, 3, 2, 5, 6, 3];
// let temp = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//         if (arr[i] > arr[j]) {
//             temp = arr[j];
//             arr[j] = arr[i];
//             arr[i] = temp;
//         }
//     }
// }
// for (let n = 0; n < arr.length - 1; n++) {
//     console.log(arr[n]);
// }

//-------------------------

// var numbers = [5, 200, 10, 755, 50, 100];
// numbers.sort(function(a, b) {
//     return a - b;
// });
// console.log(numbers);

// var fruits = ["Banana", "Orange", "Apple", "Papaya", "Mango"];
// var sorted = fruits.sort();

// console.log(fruits); // Outputs: Apple,Banana,Mango,Orange,Papaya
// console.log(sorted); // Outputs: Apple,Banana,Mango,Orange,Papaya


//---------------------
var arr = ['ab', 'pq', 'mn', 'ab', 'mn', 'ab'];
var empObj = {};
for (i = 0; i < arr.length; ++i) {
    if (!empObj[arr[i]]) {
        empObj[arr[i]] = 0;
    }
    empObj[arr[i]] = empObj[arr[i]] + 1;
}
for (var i in empObj) {
    console.log(i + ":" + empObj[i]);
}