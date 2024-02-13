function solution(prices) {
    let answer = new Array(prices.length).fill(0); // 결과 배열 초기화
    for(let i = 0; i < prices.length; i++) { // 현재 가격
        for(let j = i + 1; j < prices.length; j++) { // 비교 대상 가격
            answer[i]++; // 각 초마다 시간 증가
            if(prices[i] > prices[j]) { // 가격이 떨어지면 반복문 종료
                break;
            }
        }
    }
    return answer;
}