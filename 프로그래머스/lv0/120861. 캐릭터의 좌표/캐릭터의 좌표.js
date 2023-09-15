function solution(keyinput, board) {
    let answer = [0,0];
    let leftRightMax = Math.floor(board[0] / 2);
    let upDownMax = Math.floor(board[1] / 2)
    
    keyinput.forEach(e => {
        switch(e) {
            case 'left':
                if(Math.abs(answer[0] - 1) <= leftRightMax) {
                answer[0] -= 1;
            }
                break;
                
            case 'right':
                if (answer[0] + 1 <= leftRightMax) {
               answer[0] += 1;
            } 
                break;
                
            case 'up':
                if(answer[1] + 1 <= upDownMax) {
                answer[1] += 1;
            }
                break;
                
            case 'down':
                if (Math.abs(answer[1] - 1) <= upDownMax){
                answer[1] -= 1;
            }
                break;
        }
        
    })
    return answer;
}