function solution(food) {
    let answer = '';
    let temp = [];
    for(let i = 1; i < food.length; i++) {
        temp.push(Math.floor(food[i] / 2))
    }
    
    for(let j = 0; j <= temp.length; j++) {
        answer += String(j + 1).repeat(temp[j])
    }
    
    let str_reverse = answer.split('').reverse().join('');
    
    answer += 0;
    answer += str_reverse;
    
    return answer;
}