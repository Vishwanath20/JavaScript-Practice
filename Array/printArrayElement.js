var color = ['red', 'blue', 'green']

/* 1:- Using for loop */
console.log('-----for loop----');
for(let i=0; i<color.length; i++){
    console.log('using for loop, element is::'+color[i]);
}

/* 2: using array literal */
console.log('-----Array literal----');
let arr = new Array();
arr[0]="Red";
arr[1]="Blue";
arr[2]="Green";
for(let i=0; i<arr.length; i++){
    console.log('using Array literal, element is::'+arr[i]);
}

/* 3: Using forIn loop */
console.log('-----for In----');
for(let a in color){
    console.log(color[a]);
}

/* 4: Using forOf loop */
console.log('-----for Of----');
for(let b of color){
    console.log(b);
}

/* 5: Using forEach loop */
console.log('-----forEach----');
color.forEach( function(a, index) {
    console.log(a);
})