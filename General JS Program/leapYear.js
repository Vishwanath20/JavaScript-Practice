let year = 2022;

if(year%100 == 0){
    if(year%400 == 0){
        console.log(`Year is leap year`);
    }
    else {
        console.log(`Year is not leap Year`);
    }
} 
else if(year%4 == 0) {
    console.log(`Year is leap Year`);
}
else {
    console.log(`Year is not leap Year`);
}