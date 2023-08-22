function solution(order) {
    var answer = 0;
    return [...String(order).matchAll(/[369]/g)].length;
}