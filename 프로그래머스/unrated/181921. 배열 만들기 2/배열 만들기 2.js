function solution(l, r) {
    let answer = [];
    
    for(let i = l; i <= r; i++) {
        let numStr = i.toString();
        if(numStr.split('').every(char => char === '0' ||char === "5")) {
            answer.push(i)
        }
    }
    return answer.length > 0 ? answer : [-1];
}

// every(): 배열의 모든 요소가 제공된 함수로 구현된 테스트를 통과하는지 테스트 함. 불리언 값 반환