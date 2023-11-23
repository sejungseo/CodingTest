function solution(myString, pat) {
    let swapAB = myString.split('').map(v => v === 'A' ? 'B' : 'A').join('');
    return swapAB.includes(pat) ? 1 : 0;
}