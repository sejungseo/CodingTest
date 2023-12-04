function solution(num_list) {
    let answer = 0; // 연산 횟수
    
    num_list.forEach(num => {
        while(num !== 1) { // 각 숫자가 1이 될 때까지 반복
            if(num % 2 === 0) {
                num /= 2;
            } else {
                num = (num - 1) / 2;
            }
            answer++;
        }
    })
    return answer;
}