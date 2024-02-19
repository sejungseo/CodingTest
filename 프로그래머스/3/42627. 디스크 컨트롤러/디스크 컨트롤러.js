class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(value) {
        this.heap.push(value);
        // 힙을 소요 시간 기준으로 정렬
        // pop 연산 시 가장 소요 시간이 짧은 작업을 빠르게 가져오기 위함
        this.heap.sort((a, b) => a[1] - b[1]);
    }
    
    pop() {
        return this.heap.shift();
    }
    
    isEmpty() {
        return this.heap.length === 0; // 배열의 길이가 0이면 true, 아니면 false
    }
}

function solution(jobs) {
    jobs.sort((a, b) => a[0] - b[0]); // 작업을 요청시간 기준으로 정렬
    const priorityQueue = new MinHeap(); // 우선순위 큐 인스턴스 생성
    let time = 0, total = 0, index = 0; // 현재 시간, 총 대기 시간, 처리할 다음 작업의 인덱스
    
    // 모든 작업이 처리될 때까지 반복
    while(index < jobs.length || !priorityQueue.isEmpty()) {
        // 현재 시간 이전에 요청된 모든 작업을 우선순위 큐에 넣음
        while(index < jobs.length && jobs[index][0] <= time) {
            priorityQueue.push(jobs[index++]);
        }
        
        // 우선순위 큐가 비어있지 않으면 작업 처리
        if(!priorityQueue.isEmpty()) {
            const [start, duration] = priorityQueue.pop(); // 가장 소요 시간 짧은 작업 꺼내기
            time += duration; // 현재 시간을 작업 소요 시간만큼 증가
            total += time - start; // 총 대기 시간에 현재 작업의 대기 시간 더함
        } else {
            // 우선순위 큐가 비어 있다면, 다음 작업이 요청되는 시간으로 시간 이동
            time = jobs[index][0];
        }
    }
    return Math.floor(total / jobs.length);
}