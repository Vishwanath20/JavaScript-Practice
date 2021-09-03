function x() {
    for (var i = 0; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
    console.log("Hello JS");
}
x()

/**
 * Hello JS
6
6
6
6
6
6
 */

// --------------------------

// function x() {
//     for (let i = 0; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello JS");
// }
// x()