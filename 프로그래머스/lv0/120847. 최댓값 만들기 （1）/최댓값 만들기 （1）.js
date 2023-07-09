function solution(numbers) {
    var answer = numbers.sort((first, second) => second-first);
    return answer[0] * answer[1];
}