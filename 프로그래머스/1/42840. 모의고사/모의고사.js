function solution(answers) {
    let answer = [];
    let person1 = 0, person2 = 0, person3 = 0;
    let pattern1 = [1, 2, 3, 4, 5],
        pattern2 = [2, 1, 2, 3, 2, 4, 2, 5],
        pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    answers.forEach((answer, idx) => {
        if(pattern1[idx % pattern1.length] === answer) person1++;
        if(pattern2[idx % pattern2.length] === answer) person2++;
        if(pattern3[idx % pattern3.length] === answer) person3++;
    })
    
    const maxAnswer = Math.max(person1, person2, person3);
    
    if(person1 === maxAnswer) answer.push(1);
    if(person2 === maxAnswer) answer.push(2);
    if(person3 === maxAnswer) answer.push(3);

    return answer;
}