function solution(my_string) {
    let answer = 0;
    let str = my_string.replaceAll(/[a-zA-Z]/gi, ' ').split(' ');
    for(let i = 0; i < str.length; i++) {
        if(Number(str[i]) !== isNaN) {
            answer += Number(str[i]);
        }
    }
    return answer;
}