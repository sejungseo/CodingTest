function solution(num, total) {
    let answer = [];
    let midnum = parseInt(total / num);
    let startnum = midnum - parseInt(num / 2);
    let endnum = midnum + parseInt(num / 2);
    
    if(num % 2 !== 0) {
        for(let i = startnum; i <= endnum; i++) {
            answer.push(i);
        }
    } else {
        for(let i = startnum + 1; i <= endnum; i++) {
            answer.push(i);
        }
    }
    return answer;
}