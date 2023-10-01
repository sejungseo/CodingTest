function solution(numlist, n) {
    return numlist.sort((a,b) => b - a).sort((a,b) => Math.abs(a - n) - Math.abs(b - n));
    
    // 1. 내림차순 정렬 [6,5,4,3,2,1]
    // 2. a-n 절대값과 b-n의 절대값 비교
    // Math.abs(a - n) - Math.abs(b - n) 값이 
    // 음수 => a < b => a가 앞
    // 양수 => b < a => b가 앞
    // 0 => a = b => 순서 그대로
}