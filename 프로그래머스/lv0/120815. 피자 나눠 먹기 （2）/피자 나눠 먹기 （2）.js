function solution(n) {
    let answer = 0;
    for(let i = Math.max(n, 6); i <= n * 6; i++){
        if(i % n === 0 && i % 6 === 0) {
            answer = i;
            break;
        }
    }
    return Math.floor(answer / 6);
}