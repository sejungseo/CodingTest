function solution(l, r) {
    let answer = [];
    
    for(let i = l; i <= r; i++) {
        let numStr = i.toString();
        if(numStr.split('').every(char => char === '0' ||char === "5")) {
            answer.push(i)
        }
    }
    return answer.length > 0 ? answer : [-1];
}