function solution(s) {
  let answer = parseInt(s);
 
  if ((s.length === 4 || s.length === 6) && s == answer) {
    return (answer = true);
  } else {
    return (answer = false);
  }
  return answer;
}