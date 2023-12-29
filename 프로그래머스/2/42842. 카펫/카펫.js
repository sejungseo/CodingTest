function solution(brown, yellow) {
    const total = brown + yellow; // 전체 격자 수
    
    for(let y = 3; y <= total; y++) { // y: 카펫의 세로 길이
        if(total % y === 0) {
            let x = total / y;
            if((x - 2) * (y - 2) === yellow) { // 노란 격자는 갈색 테두리에 의해 가로, 세로가 2씩 작아짐
                return [x, y]
            }
        }
    }
}