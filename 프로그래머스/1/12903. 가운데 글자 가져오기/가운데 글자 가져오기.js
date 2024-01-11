function solution(s) {
    let mid = s[Math.floor(s.length / 2)];
    let beforeMid = s[Math.floor(s.length / 2) - 1];
    return s.length % 2 === 0 ? beforeMid + mid : mid;
}