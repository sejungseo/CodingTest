function solution(q, r, code) {
    let answer = '';
    let arr = code.split('');
    const dividedArr = arr.map((_, idx) => idx % q);
    for(let i = 0; i < dividedArr.length; i++) {
        while(dividedArr[i] === r) {
            answer += arr[i];
            break;
        }
    }
    return answer;
}