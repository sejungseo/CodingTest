function solution(my_string) {
    let answer = 0;
    let str = my_string.split("");
    for (let i of str) {
        if (Number(i)) {
            answer += Number(i);
        }
    }
    return answer;
}