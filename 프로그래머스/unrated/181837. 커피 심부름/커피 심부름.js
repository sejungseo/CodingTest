function solution(order) {
    let answer = 0;
    for(let i = 0; i < order.length; i++) {
        if(order[i].match(/americano/g)) {
            answer += 4500;
        } else if(order[i].match(/latte/g)) {
            answer += 5000;
        } else {
            answer += 4500;
        }
    }
    return answer;
}