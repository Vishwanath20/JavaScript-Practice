console.clear();
console.log(`-------------------------------`);
for(let year = 2014; year<= 2050; year++) {
    let d = new Date(year, 0, 5);
    if( d.getDay() === 5){
        console.log(`1st january is being a Sunday for ${year}`);
    }
}
console.log(`-------------------------------`);