function solution(n) {
    let a = 0;
    let b = 1;
    let c;
    
    for(let i = 2; i <= n; i++) {
        c = (a + b) % 1234567;
        a = b;
        b = c;
    }
    return c;
}