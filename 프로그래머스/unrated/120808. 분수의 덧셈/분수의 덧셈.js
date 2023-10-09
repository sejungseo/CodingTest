function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1; // 분자
    let denom = denom1 * denom2; // 분모
    let gcd = 1; // 최대공약수
    
    for(let i = 1; i <= numer; i++) {
        if(numer % i === 0 && denom % i === 0) {
            gcd = i;
        }
    }
    return [numer / gcd, denom / gcd];
}