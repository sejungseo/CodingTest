function solution(s) {
    let removeCount = 0; // 제거된 0의 개수
    let transformCount = 0; // 이진 변환 횟수
    
    while(s !== "1") {
        let lengthBefore = s.length;
        s = s.replace(/0/g, ''); // 모든 0 제거
        let lengthAfter = s.length;
        
        removeCount += lengthBefore - lengthAfter; // 제거된 0의 개수
        s = lengthAfter.toString(2); // 남은 문자열의 길이 2진수로 변환
        transformCount++; // 이진 변환 횟수 증가
    }
    return [transformCount, removeCount];
}