function factorial(n) {
    let answer = 1;
    for(let i = 1; i <= n; i++) {
        answer *= i;
    } return answer;
}


function solution(balls, share) {
    return result = Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)));
}