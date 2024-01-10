function solution(arr) {
    let answer = [];
    const min = Math.min(...arr); 
    answer = arr.filter(num => num > min);
    return answer.length ? answer : [-1];
}