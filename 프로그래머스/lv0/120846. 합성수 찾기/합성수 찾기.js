function solution(n) {
    let answer = [];
    for(let i = 1; i <= n; i++){
        let num = [];
        for(let j = 1; j <= n; j++){
            if(i % j === 0){
                num.push(j);
            }
            if(num.length >= 3){
                answer.push(i);
                
                break;
            }
        }
    }
    return answer.length;
}