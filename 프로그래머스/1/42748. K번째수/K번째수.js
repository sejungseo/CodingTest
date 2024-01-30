function solution(array, commands) {
    let answer = [];
    commands.forEach(([i, j, k]) => {
        const slicedArr = array.slice(i - 1, j).sort((a, b) => a - b);
        const number = slicedArr[k - 1]
        answer.push(number);
    })
    return answer;
}