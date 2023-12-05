function solution(intStrs, k, s, l) {
    let answer = [];
    for(let i = 0; i < intStrs.length; i++) {
        let slicedStr = intStrs[i].slice(s, s + l);
        if(slicedStr > k) {
            answer.push(parseInt(slicedStr));
        }
    }
    return answer;
}