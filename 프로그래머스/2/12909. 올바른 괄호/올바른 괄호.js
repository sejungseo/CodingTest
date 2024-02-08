function solution(s){
    let tempArr = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') { // '('를 만나면 tempArr에 push
            tempArr.push(s[i]);
        } else { // ')'를 만나면
            if(tempArr.length === 0) { // tempArr가 비어있는지 확인
                return false;
            }
            tempArr.pop(); // 비어있지 않다면 pop
        }
    }
    return tempArr.length === 0 ? true : false;
}