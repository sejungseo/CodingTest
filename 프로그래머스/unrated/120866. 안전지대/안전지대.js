function solution(board) {
    let answer = board.length * board.length; // board 배열 크기만큼 안전지대로 초기화
    let x = [-1, 0, 1, 1, 1, 0, -1, -1]; // x좌표
    let y = [1, 1, 1, 0, -1, -1, -1, 0]; // y좌표
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j <  board.length; j++) {
            if(board[i][j] === 1) { // 지뢰가 있을 경우
                answer--; // 안전지대에서 제외
                for(let direction = 0; direction < 8; direction++) { // 위험지역 8방향에 지뢰 유무 확인
                    let newX = i + x[direction]; // 지뢰 기준 주변 8방향의 위험지역 x좌표
                    let newY = j + y[direction]; // 지뢰 기준 주변 8방향의 위험지역 y좌표
                    // 위험지역 좌표가 board 범위 내에 있는지 확인
                    if(newX >= 0 && newY >= 0 && newX < board.length && newY < board.length) {
                        if(board[newX][newY] === 0) { // 지뢰 주변 8방향에 추가 지뢰 없을 경우 => 위험지역
                            answer--; // 안전지대에서 제외
                            board[newX][newY] = '*'; // 위험지역 *로 표시 => 1이 연속으로 있을 경우 이미 위험지역으로 속한 곳을 중복 제외하지 않기 위해
                        }
                    }
                }
            }
        }
    }
    return answer;
}