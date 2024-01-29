function solution(n, arr1, arr2) {
    let answer = [];
    for(let i = 0; i < n; i++) {
        let binaryString = (arr1[i] | arr2[i]).toString(2);
        binaryString = binaryString.padStart(n, '0');
        let mapLine = binaryString.replaceAll('0', ' ').replaceAll('1', '#');
        answer.push(mapLine)
    }
    return answer;
}