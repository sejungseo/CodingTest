function solution(s){
    let tempArr = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') { // '('를 만나면 푸시
            tempArr.push(s[i]);
        } else { // ')'를 만나면 tempArr가 비어있는지 확인
            if(tempArr.length === 0) { // 비어있다면
                return false;
            }
            tempArr.pop(); // 비어있지 않다면
        }
    }
    return tempArr.length === 0; 
    // tempArr가 비어있다면 모든 괄호가 짝지어진 것이므로 true 반환
    // tempArr가 비어있지 않다면 false 반환
}