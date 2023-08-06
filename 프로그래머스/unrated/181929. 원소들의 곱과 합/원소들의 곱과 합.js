function solution(num_list) {
    let multifly = num_list.reduce((a, b) => a * b);
    let sum = num_list.reduce((a,b) => a + b);
    return multifly < sum**2 ? 1 : 0;
}