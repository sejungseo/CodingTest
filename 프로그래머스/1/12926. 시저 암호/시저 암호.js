function solution(s, n) {
    let answer = '';
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if(char === ' ') {
            answer += char;
        } else {
            let code = char.charCodeAt(0); // 현재 문자의 아스키 코드
            let base = char === char.toUpperCase() ? 65 : 97; // 현재 문자가 대문자(65)인지 소문자(97)인지 확인
            
            let moved = (code - base + n) % 26 + base; 
            // 현재 문자를 n만큼 이동
            // 알파벳 26글자 범위를 넘어가지 않도록 '% 26'
            // 다시 base를 더해 원래 범위로 되돌림
            
            answer += String.fromCharCode(moved);
        }
    }
    return answer;
}