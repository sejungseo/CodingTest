function solution(numbers, k) {
  return numbers[(k - 1) * 2 % numbers.length]
}
// 인덱스는 0부터 세기 때문에 k-1
// 한 명 건너뛰므로 *2
// 배열의 길이만큼 나눈 나머지의 인덱스가 정답
// 배열의 길이가 넘었을 경우 나머지 값으로 다음에 위치할 인덱스 값 파악