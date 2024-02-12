function solution(priorities, location) {
    // 프로세스와 인덱스를 객체로 만들어 새 배열 생성
    let queue = priorities.map((priority, index) => ({index, priority})); 
    let order = 0; // 프로세스가 실행되는 순서
    
    while(queue.length) {
        let current = queue.shift();
        // 현재 프로세스보다 우선순위가 높은 프로세스가 대기열에 있는지 확인
        if(queue.some(process => process.priority > current.priority)) {
            queue.push(current); // 현재 프로세스를 대기열 끝으로 이동
        } else {
            order++; // 프로세스 실행 순서 증가
            if(current.index === location) {
                // 현재 프로세스가 원하는 위치의 프로세스라면 실행 순서 반환
                return order;
            }
        }
    }
}