function solution(array, commands) {
    let answer = [];
    let temp = [];
    
    for(let i = 0; i < commands.length; i++) {
        const start = commands[i][0] - 1;
        const end = commands[i][1];
        
        temp.push(array.slice(start, end).sort((a, b) => a - b));
        console.log(temp)
        answer.push(temp[i][commands[i][2] - 1]);
    }
    return answer;
}