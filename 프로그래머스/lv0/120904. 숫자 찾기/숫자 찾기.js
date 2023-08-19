function solution(num, k) {
    let str = num.toString();
    return str.includes(k) ? str.indexOf(k) + 1 : -1;
}