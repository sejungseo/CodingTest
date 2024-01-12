function solution(left, right) {
    let answer = 0; 
    
    for(let i = left; i <= right; i++) {
        let count = 0; // 약수의 개수
        for(let j = 1; j <= i; j++) { // 약수 구하는 식
            if(i % j === 0) count++;
        }
        if(count % 2 === 0) answer += i; // 약수의 개수가 짝수면 더하고
        else answer -= i; // 약수의 개수가 홀수면 빼기
    }
    return answer;
}