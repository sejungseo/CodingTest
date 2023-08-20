function solution(order) {
    var answer = 0;
    return [...String(order).matchAll(/[3|6|9]/g)].length;
}