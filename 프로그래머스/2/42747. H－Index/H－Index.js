function solution(citations) {
    let answer = 0;
    citations.sort((a, b) => b - a);
    for(let h = 0; h < citations.length; h++) {
        if(citations[h] > h) answer++;
        else break;
    }
    return answer;
}