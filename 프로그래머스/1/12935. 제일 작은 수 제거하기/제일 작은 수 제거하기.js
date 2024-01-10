function solution(arr) {
  let answer = [];
  answer = arr.filter(num => num > Math.min(...arr));
  return answer.length ? answer : [-1];
}