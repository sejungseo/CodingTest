function solution(num) {
    let answer = 0;
    for(let i = 0; i < num; i++) {
        while(num !== 1) {
            if(num % 2 === 0) {
                num /= 2;
            } else {
                num = num * 3 + 1;
            }
            answer++
        }
        if(answer > 500) {
            return -1;
        }
    }
    return answer;
}