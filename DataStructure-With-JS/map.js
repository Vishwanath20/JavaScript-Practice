const map = new Map([['a',1], ['b',2]]);
map.set('c',3);         // To Add element
map.delete('c');        // To delete element

console.log(map.has('a'));  // To check if element exist or not
console.log(map.size);      // To check key pair value size

for(const [key, value] of map) {
    console.log(`${key}: ${value}`);
}