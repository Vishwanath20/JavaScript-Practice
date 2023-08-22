const set = new Set([1,2,3]);
set.add(4);
console.log(set.has(3));
console.log('set size is::'+set.size);

for(const item of set){
    console.log(item);
}