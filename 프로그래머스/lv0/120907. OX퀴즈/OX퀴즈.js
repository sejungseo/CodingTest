function solution(quiz) {
    let answer = [];
    quiz.forEach((item)=>{
        const arrQuiz = item.split(' ');
        const x = Number(arrQuiz[0]);
        const y = Number(arrQuiz[2]);
        
        let calc = 0;
        if(arrQuiz[1] === '+'){
            calc = x + y;
        } else if(arrQuiz[1] === '-'){
            calc = x - y;
        }
        
        const result = Number(arrQuiz[4]);
        
        if(calc === result) {
            answer.push('O')
        } else if(calc !== result) {
            answer.push('X')
        }
    })
    return answer;
}