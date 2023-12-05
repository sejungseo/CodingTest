function solution(strArr) {
    const strLengthArr = strArr.map(v => v.length); // 문자열 길이 배열
    const result = {}; // 빈도수 계산
    strLengthArr.forEach(v => {
        result[v] = (result[v] || 0) + 1;
    })
    return Math.max(...Object.values(result));
}