function solution(arr) {
    let n = 1;
    
    // 2의 거듭제곱 찾기
    while(n < arr.length) {
        n *= 2;
    }
    
    let zeroToAdd = n - arr.length;
    for(let i = 0; i < zeroToAdd; i++) {
        arr.push(0)
    }
    return arr;
}