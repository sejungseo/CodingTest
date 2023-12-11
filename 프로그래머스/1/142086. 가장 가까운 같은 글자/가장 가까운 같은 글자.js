function solution(s) {
    let answer = [-1];
    
    for(let i = 1; i < s.length; i++) {
        let char = s[i];
        let lastIndex = s.lastIndexOf(char, i - 1); // 현재 인덱스 이전에서 문자의 마지막 위치 찾기
        
        if(lastIndex !== -1) { // 문자가 이전에 존재하는 경우
            answer.push(i - lastIndex);
        } else {
            answer.push(-1);
        }
    }
    return answer;
}