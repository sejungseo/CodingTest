function solution(arr) {
    var answer = [];
    for(let i = 0; i < arr.length; i++) {
        const el = arr[i];
        
        for(let j = 0; j < el; j++){
            answer.push(el)
        }
    }
    return answer;
}