function solution(d, budget) {
    let answer = 0;
    let sortedD = d.sort((a, b) => a - b);
    for(let i = 0; i < sortedD.length; i++) {
        budget -= sortedD[i];
        if(budget < 0) {
            break;
        }
        answer++
    }
    return answer;
}