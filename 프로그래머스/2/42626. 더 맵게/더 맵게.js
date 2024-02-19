class MinHeap {
    constructor() {
        this.heap = []; // 힙(스코빌 지수)을 저장할 배열 초기화
    }
    
    // 힙에 들어있는 요소의 개수
    size() {
        return this.heap.length;
    }
    
    // 새로운 값을 힙에 추가
    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1; // 추가된 요소의 인덱스
        
        // 추가된 값이 올바른 위치를 찾을 때까지 부모 노드와 비교하여 위로 이동
        while(
            currentIndex > 0 &&
            this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) / 2)]
        ) {
            // 부모 노드와 자리 변경
            const temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)];
            this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
            // 인덱스를 부모 노드의 인덱스로 업데이트
            currentIndex = Math.floor((currentIndex - 1) / 2);
        }
    }
    
    // 힙에서 최소값을 제거하고 그 값을 반환
    pop() {
        if(this.heap.length === 0) return null; // 힙이 비어있을 경우
        if(this.heap.length === 1) return this.heap.pop(); // 요소가 하나만 있을 경우
        
        const minValue = this.heap[0]; // 힙의 최소값을 임시 변수에 저장
        this.heap[0] = this.heap.pop(); // 마지막 요소를 힙의 첫번째 위치로 이동
        let currentIndex = 0;
        
        // 새로운 루트가 올바른 위치를 찾을 때까지 아래로 이동
        while(currentIndex * 2 + 1 < this.heap.length) {
            let minChildIndex = 
                (currentIndex * 2 + 2 < this.heap.length 
                && this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1])
                ? currentIndex * 2 + 2 : currentIndex * 2 + 1;
            
            if(this.heap[currentIndex] < this.heap[minChildIndex]) {
                break;
            }
            
            // 자식 노드와 현재 노드의 위치 변경
            const temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[minChildIndex];
            this.heap[minChildIndex] = temp;
            currentIndex = minChildIndex; // 인덱스를 자식 노드의 인덱스로 업데이트
        }
        return minValue; // 최소값 반환
    }
    
    // 힙의 최소값을 확인(제거는 안 함)
    peek() {
        return this.heap[0];
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap(); // 최소 힙 생성
    
    // 스코빌 지수 배열의 모든 요소를 최소 힙에 추가
    for(const sco of scoville) {
        minHeap.push(sco);
    }
    
    let mixedCount = 0; // 음식을 섞은 횟수
    
    // 힙에 두개 이상의 요소가 있고, 힙의 최소값이 K보다 작은 경우 반복
    while(minHeap.size() >= 2 && minHeap.peek() < K) {
        const first = minHeap.pop();
        const second = minHeap.pop();
        const mixedScov = first + second * 2;
        minHeap.push(mixedScov);
        mixedCount++;
    }
    // 모든 음식의 스코빌 지수가 K이상인지 확인
    return minHeap.peek() >= K ? mixedCount : -1;
}