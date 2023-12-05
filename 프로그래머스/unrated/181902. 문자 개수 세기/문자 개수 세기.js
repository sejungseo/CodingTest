function solution(my_string) {
    let answer = [];
    for(let i = 0; i < 26; i++) {
        const char = String.fromCharCode(i + 65); // 'A'의 char code는 65
        const regex = new RegExp(char, 'g'); // 현재 문자에 대한 정규표현식 생성
        const matches = my_string.match(regex);
        // console.log(matches)
        answer.push(matches ? matches.length : 0);
    }
    
    for(let i = 0; i < 26; i++) {
        const char = String.fromCharCode(i + 97); // 'a'의 char code는 97
        const regex = new RegExp(char, 'g');
        const matches = my_string.match(regex);
        answer.push(matches ? matches.length : 0);
    }
    
    return answer;
}