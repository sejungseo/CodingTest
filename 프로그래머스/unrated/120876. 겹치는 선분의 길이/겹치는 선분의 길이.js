function solution(lines) {
  var answer = 0; // 겹치는 부분의 길이
  let lineMap = new Array(200);  // 선분들이 놓일 배열: -100 <= 범위 <= 100
  lineMap.fill(0); // 배열 0으로 초기화

  for (let i = 0; i < 3; i++) {
    let left = lines[i][0]; // 선분의 시작점
    let right = lines[i][1]; // 선분의 끝점

    for (let j = left; j < right; j++) {
      lineMap[j + 100] += 1; // 선분이 존재하는 공간을 1증가
        // 음수 지점을 인덱스로 사용할 수 없어 양수로 변환하기 위해 +100
    }
  }

  for (let i in lineMap) {
    if (lineMap[i] > 1) { // 2개 이상의 선분이 겹친 경우
      answer += 1; // 겹치는 부분의 길이 증가
    }
  }

  return answer;
}