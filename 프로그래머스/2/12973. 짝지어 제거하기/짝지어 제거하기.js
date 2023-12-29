function solution(s) {
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        if(stack[stack.length - 1] === s[i]) {
            stack.pop(); // 같은 문자를 만나면 제거
        } else {
            stack.push(s[i]); // 다른 문자면 스택에 추가
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}