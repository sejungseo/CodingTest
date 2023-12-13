function solution(arr, queries) {
    let answer = [];
    for(let i = 0; i < queries.length; i++){
        const [s, e, k]=  queries[i];
        const num = [];
        
        for(let j = s; j <= e; j++) {
            if(arr[j] > k) {
                num.push(arr[j]);
            }
        }
        if(num.length >= 1) {
            const minNum = Math.min(...num);
            answer.push(minNum);
        } else {
            answer.push(-1);
        }
    }
    return answer;
}