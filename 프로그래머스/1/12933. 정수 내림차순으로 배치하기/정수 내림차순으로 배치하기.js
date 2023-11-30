function solution(n) {
    let letter = String(n).split('').sort((a, b) => b - a).join('');
    return parseInt(letter);
}