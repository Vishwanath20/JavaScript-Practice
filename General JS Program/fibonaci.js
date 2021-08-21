function findFibo(n) {
    let a = 0; // or  let a = -1;
    let b = 1;
    let next;
    for (let i = 1; i <= n; i++) {
        next = a + b;
        a = b;
        b = next;
        console.log(next);
    }
}
findFibo(5);