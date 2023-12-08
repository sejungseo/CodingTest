function solution(price, money, count) {
    let cost = 0;
    
    for(let i = 1; i <= count; i++) {
        cost += price * i;
    }
    
    const balance = money - cost;
    return balance > 0 ? 0 : Math.abs(balance);
}