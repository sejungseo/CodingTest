function solution(numbers) {
    numbers.sort((a, b) => a - b);
    const mintwo = numbers[0] * numbers[1];
    const maxtwo = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    return mintwo > maxtwo ? mintwo : maxtwo;
}