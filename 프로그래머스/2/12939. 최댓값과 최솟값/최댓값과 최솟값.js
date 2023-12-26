function solution(s) {
    let answer = '';
    let sortedArr = s.split(' ');
    return answer = `${Math.min(...sortedArr)} ${Math.max(...sortedArr)}`
}