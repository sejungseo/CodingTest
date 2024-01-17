function solution(s) {
    return (s.length === 4 || s.length === 6) && /^\d+$/.test(s);
    // test() 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true 또는 false로 반환
}