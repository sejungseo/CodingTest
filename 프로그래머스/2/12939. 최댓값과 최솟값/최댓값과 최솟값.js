function solution(s) {
    let answer = '';
    let sortedArr = s.split(' ').sort((a, b) => a - b);
    return answer = `${Math.min(...sortedArr)} ${Math.max(...sortedArr)}`
}