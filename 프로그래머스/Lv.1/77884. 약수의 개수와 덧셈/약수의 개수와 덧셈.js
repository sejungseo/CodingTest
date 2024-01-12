function countDivision(num) { // 약수의 개수 구하는 함수
    let sum = 0;
    
    for(let i = 0; i <= num; i++) {
        if(num % i === 0) sum += 1;
    }
    return sum;
}

function solution(left, right) { // 약수의 개수 조건에 따라 계산하는 함수
    let answer = 0;
    
    for(let i = left; i <= right; i++) {
        countDivision(i) % 2 === 0 ? answer += i : answer -= i;
    }
    return answer;
}