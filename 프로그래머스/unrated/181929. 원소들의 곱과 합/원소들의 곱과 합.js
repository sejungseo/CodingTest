function solution(num_list) {
    let multifly = num_list.reduce((a, b) => a * b, 1);
    let sum = num_list.reduce((a,b) => a + b, 0);
    return multifly < sum ** 2 ? 1 : 0;
}