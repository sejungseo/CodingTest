function solution(n) {
    const answer = Math.floor(n / 7);
    if (n % 7 === 0) {
        return answer;
    } else
    return answer+1;
}