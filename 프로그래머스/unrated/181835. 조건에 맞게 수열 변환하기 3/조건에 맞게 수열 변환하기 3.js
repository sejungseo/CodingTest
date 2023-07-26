function solution(arr, k) {
    var answer = [];
    for (i = 0; i < arr.length; i++) {
        if (k % 2 !== 0) {
            answer.push(arr[i] * k);
        } if (k % 2 === 0) {
            answer.push(arr[i] + k);
        }
    }
    return answer;
}