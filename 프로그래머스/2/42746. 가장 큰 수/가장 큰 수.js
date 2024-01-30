function solution(numbers) {
    let answer = numbers
        .map((number) => number.toString()) // 문자열 변환
        .sort((a, b) => (b + a) - (a + b))  // 문자열 조합 비교 정렬
        .join('');
    return answer[0] === '0' ? '0' : answer;
    // 가장 큰 수가 0일 경우 '000...'이 되므로 0 반환
}