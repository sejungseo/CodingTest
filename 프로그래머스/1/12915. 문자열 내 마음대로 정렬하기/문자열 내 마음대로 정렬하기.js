function solution(strings, n) {
    return strings.sort((a, b) => {
        // n번째 문자 비교
        if(a[n] !== b[n]) {
            return a[n] < b[n] ? -1 : 1;
        }
        // n번째 문자가 같으면 전체 문자열을 사전순으로 비교
        return a < b ? -1 : 1;
    });
}