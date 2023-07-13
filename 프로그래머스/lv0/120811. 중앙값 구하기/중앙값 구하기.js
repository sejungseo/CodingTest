function solution(array) {
    answer = array.sort((a,b) => a-b);
    const mid = Math.floor(answer.length / 2)
    return answer[mid];
}