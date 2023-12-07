function solution(left, right) {
    let answer = 0;
    
    for(let i = left; i <= right; i++) {
        // 약수의 개수가 홀수인 경우 => 제곱수일 경우
        // 제곱수 확인 방법 => 해당 수의 제곱근 계산해 그 제곱근이 정수인지 확인
        if(Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}