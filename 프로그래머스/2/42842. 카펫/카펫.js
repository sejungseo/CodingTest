function solution(brown, yellow) {
    const total = brown + yellow;
    
    for(let y = 3; y <= total; y++) { // y: 세로 길이
        if(total % y === 0) {
            let x = total / y; // x: 가로 길이
            if((x - 2) * (y - 2) === yellow) { // 테두리 제외한 중앙(yellow)의 크기 값
                return [x, y]
            }
        }
    }
}