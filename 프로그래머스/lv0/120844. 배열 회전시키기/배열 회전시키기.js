function solution(numbers, direction) {
    const firstnum = numbers[0];
    const lastnum = numbers[numbers.length - 1];
    if(direction === "right") {
        numbers.pop();
        numbers.unshift(lastnum);
    } else {
        numbers.shift();
        numbers.push(firstnum);
    }
    return numbers;
}