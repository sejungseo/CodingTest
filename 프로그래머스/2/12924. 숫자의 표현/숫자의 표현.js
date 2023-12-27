function solution(n) {
    let answer = 0;
    
    for(let i = 1; i * (i + 1) / 2 <= n; i++) {
        if((n - i * (i - 1) / 2) % i === 0) {
            answer++;
        }
    }
    return answer;
}
// i개의 연속된 숫자의 합이 n과 같은지 확인
// n에서 1부터 i-1 까지의 합을 뺀 후 i로 나눈 나머지가 0이면 n이 i개의 연속된 숫자의 합으로 표현 가능