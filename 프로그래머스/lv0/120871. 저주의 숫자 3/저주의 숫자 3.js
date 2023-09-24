function solution(n) {
    let answer = 0;
    
    for(let i = 1; i <= n; i++) {
        answer ++; 
        
        while(answer % 3 === 0 || String(answer).includes('3')) { // 3의 배수이거나 3을 포함하는 수
            answer++;
        }
    }
    return answer;
}