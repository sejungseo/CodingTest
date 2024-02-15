function solution(answers) {
    let answer = [];
    let person1 = 0, person2 = 0, person3 = 0;
    let pattern1 = [1, 2, 3, 4, 5],
        pattern2 = [2, 1, 2, 3, 2, 4, 2, 5],
        pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === pattern1[i % pattern1.length]) person1++;
        if(answers[i] === pattern2[i % pattern2.length]) person2++;
        if(answers[i] === pattern3[i % pattern3.length]) person3++;
    }
    
    const maxAnswer = Math.max(person1, person2, person3);
    if(person1 === maxAnswer) answer.push(1);
    if(person2 === maxAnswer) answer.push(2);
    if(person3 === maxAnswer) answer.push(3);

    return answer;
}