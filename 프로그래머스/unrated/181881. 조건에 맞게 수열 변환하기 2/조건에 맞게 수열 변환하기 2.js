function solution(arr) {
    let answer = 0; // 변환 과정의 반복 횟수
    let prevArr = arr;
    while(true) {
        const curArr = prevArr.map(v => {
            if(v >= 50 && v % 2 === 0) return v / 2;
            if(v < 50 && v % 2 !== 0) return v * 2 + 1;
            return v; // 그 외의 경우, 값이 변하지 않음
        })
        // 이전 배열과 현재 배열이 같은지 비교
        const sameArr = prevArr.every((v, i) => v === curArr[i])
        if(sameArr) break; // prevArr와 curArr가 동일하다면(true) break 종료
        answer++; // 다르다면(false) 변환 1 추가
        
        prevArr = curArr;
    }
    return answer;
}