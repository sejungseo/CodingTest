function solution(score) {
    let average = score.map(v => (v[0] + v[1]) / 2); // 평균 점수 구하기 [75,70,55,65]
    let sortedArr = average.slice().sort((a, b) => b - a); 
    // slice(): 원본(average) 배열이 바뀌지 않음
    // sort(): 오름차순 정렬 [75,70,65,55]

    return average.map(v => sortedArr.indexOf(v) + 1);
    // indexOf(): 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스 반환
}