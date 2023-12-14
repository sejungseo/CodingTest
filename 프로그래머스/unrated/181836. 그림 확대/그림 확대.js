function solution(picture, k) {
    let answer = [];
    for(row of picture) {
        // 가로 확장
        let expandedRow = row.split('').map(pixel => pixel.repeat(k)).join('');
        console.log(expandedRow)
        
        // 세로 확장
        for(let i = 0; i < k; i++) {
            answer.push(expandedRow);
            console.log(expandedRow)
            
        }
    }
    return answer;
}