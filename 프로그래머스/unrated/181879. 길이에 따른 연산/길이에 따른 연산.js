function solution(num_list) {
    let answer = 0;
    if (num_list.length >= 11) {
        return num_list.reduce((a,b) => a + b);
    } if (num_list.length <= 10) {
        return num_list.reduce((a,b) => a * b);
    }
    return answer;
}