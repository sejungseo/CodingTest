function solution(a, b) { // a가 분자, b가 분모
    // 최대공약수 gcd 구하기
    let gcd = 1;
    for(let i = 1; i <= b; i++){
        if(a % i === 0 && b % i === 0) gcd = i;
    }
    
    // 분모 b를 최대공약수 gcd로 약분
    b = b / gcd;
    
    // 분모 b의 소인수에 2와 5 이외의 숫자가 나올 때까지 반복
    while(b % 2 === 0) b = b / 2;
    while(b % 5 === 0) b = b / 5;
    
    // 분모 b를 2와 5로 나눈 몫이 1이 나오면 분모의 소인수가 2와 5만 있다는 증거
    // b가 1이면 유한소수 1 반환하고 아니면 무한소수 2 반환
    return b === 1 ? 1 : 2;
}