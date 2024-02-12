function solution(bridge_length, weight, truck_weights) {
    let time = 0; // 전체 걸린 시간
    let bridge = new Array(bridge_length).fill(0); // 다리 상태. 다리 길이만큼 0으로 초기화
    let currentWeight = 0; // 현재 다리 위의 트럭 총 무게
    
    while(bridge.length > 0) {
        // 다리에서 첫 번째 요소 제거하고, 그 무게만큼 현재 다리 위 트럭 무게에서 빼줌
        currentWeight -= bridge.shift();
        // 대기중인 트럭 유무 확인
        if(truck_weights.length > 0) {
            // 새로운 트럭을 다리에 추가로 올릴 수 있는지 확인
            if(currentWeight + truck_weights[0] <= weight) {
                let truck = truck_weights.shift();
                bridge.push(truck);
                currentWeight += truck;
            } else { // 올릴 수 없다면, 다리에 무게 0 추가
                bridge.push(0);
            }
        }
        time++; // 시간 1초 증가
    }
    return time; // 모든 트럭이 다리 건넌 후 총 시간 반환
}