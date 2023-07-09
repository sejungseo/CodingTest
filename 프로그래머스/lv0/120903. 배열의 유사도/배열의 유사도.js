function solution(s1, s2) {
    const answer = s1.filter(i => s2.includes(i));
    return answer.length
}