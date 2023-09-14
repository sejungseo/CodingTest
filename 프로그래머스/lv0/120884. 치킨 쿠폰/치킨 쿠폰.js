function solution(chicken) {
    let service = 0; // 서비스 치킨
    let coupon = chicken; // 쿠폰 개수 = 치킨 수
    
    while(coupon >= 10) { 
        service += Math.floor(coupon / 10) // 서비스 치킨
        coupon = Math.floor(coupon / 10) + coupon % 10 
        // 서비스 치킨에도 쿠폰 발급
        // 쿠폰 수 + 서비스 치킨 수
    }
    
    return service;
}