function solution(n) {
    let answer = [];
    let i = 2; // 가장 작은 소수
    while(n > 1) {
        if(n % i === 0) {
            answer.push(i);
            n = n / i;
            i = 2;
        } else {
            i++;
        }
    }
    return [...new Set(answer)]; // Set() 배열의 중복제거
}