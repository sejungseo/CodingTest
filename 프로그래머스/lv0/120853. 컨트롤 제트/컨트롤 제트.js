function solution(s) {
    let answer = 0;
    let num = s.split(" ");
    
    for(let i = 0; i < num.length; i++){
        if(num[i] === "Z") {
            answer -= Number(num[i-1]);
        } else {
            answer += Number(num[i])
        }
    }
    return answer;
}