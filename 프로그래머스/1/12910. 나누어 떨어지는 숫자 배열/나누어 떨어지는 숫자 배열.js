function solution(arr, divisor) {
    const filteredArr = arr.filter(v => v % divisor === 0).sort((a, b) => a - b)
    return filteredArr.length ? filteredArr : [-1];
}