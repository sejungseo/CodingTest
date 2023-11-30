function solution(my_string, m, c) {
    let answer = '';
    for(let i = c-1; i < my_string.length; i += m) { // c-1번째 인덱스부터 순회
        answer += my_string[i]
    }
    return answer;
}