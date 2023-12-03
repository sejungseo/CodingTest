function solution(arr) {
    let powerOfTwo = 1;
    
    // 2의 거듭제곱 찾기
    while(powerOfTwo < arr.length) {
        powerOfTwo *= 2;
    }
    
    let zeroToAdd = powerOfTwo - arr.length;
    for(let i = 0; i < zeroToAdd; i++) {
        arr.push(0)
    }
    return arr;
}