function solution(n) {
    let answer = '';
    for(let i = 0; i < n; i++){
        answer += '수박'
    }
    return answer.slice(0, n);
}