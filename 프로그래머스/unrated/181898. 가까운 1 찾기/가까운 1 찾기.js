function solution(arr, idx) {
    let answer = -1;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 1 && i >=idx) {
            answer = i;
            break;
        }
    } return answer;
}