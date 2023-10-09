function solution(quiz) {
    let answer = [];
    quiz.forEach((item)=>{
        const arrQuiz = item.split(' ');
        const x = Number(arrQuiz[0]);
        const y = Number(arrQuiz[2]);
        
        let z = 0;
        if(arrQuiz[1] === '+'){
            z = x + y;
        } else if(arrQuiz[1] === '-'){
            z = x - y;
        }
        
        const result = Number(arrQuiz[4]);
        
        if(z === result) {
            answer.push('O')
        } else if(z !== result) {
            answer.push('X')
        }
    })
    return answer;
}