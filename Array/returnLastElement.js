function last(arr, n)
{
    console.log(`len is:: ${arr.length}`);
    console.log(`math.max  is:: ${Math.max(arr.length)}`);
    console.log(`math.max  is:: ${Math.max(arr.length-n)}`);
    console.log(`arrr.slie  is:: ${arr.slice(Math.max(arr.length-n))}`);
}

//last([7, 9, 0, 1, 8, 8, 5, 6, 9, 5],10);

last([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3);