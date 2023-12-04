function solution(myString, pat) {
    let answer = 0; // pat 등장 횟수
    let current = 0; // 현재 위치
    
    while(true) {
        current = myString.indexOf(pat, current); // pat를 current 위치부터 찾기
        if(current !== -1) { // pat 발견되면
            answer++;
            current ++;
        } else {
            break; // pat 발견되지 않으면 종료
        }
    }
    return answer;
}