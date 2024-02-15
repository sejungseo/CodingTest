function solution(k, dungeons) {
    let answer = 0; // 탐험할 수 있는 최대 던전 수
    
    // 던전의 모든 순열을 생성하는 함수
    function permute(arr, start = 0) {
        if(start === arr.length - 1) {
            // 하나의 순열 완성
            testDungeons(arr);
            return;
        }
        
        for(let i = start; i < arr.length; i++) {
            [arr[start], arr[i]] = [arr[i], arr[start]]; // 현재 요소를 시작으로 순열 생성
            permute(arr, start + 1); // 다음 요소를 위한 순열 생성
            [arr[start], arr[i]] = [arr[i], arr[start]]; // 원상복구
        }
    }
    
    // 각 순열에 대해 탐험 가능한 던전 수 계산하는 함수
    function testDungeons(permutation) {
        let currentK = k; // 현재 피로도
        let count = 0; // 탐험한 던전 수
        for(let [minFatigue, useFatigue] of permutation) {
            if(currentK >= minFatigue) { // 최소 필요 피로도를 만족하는 경우
                currentK -= useFatigue; // 피로도 감소
                count++; // 탐험한 던전 수 증가
            } else {
                break; // 더이상 탐험 불가능
            }
        }
        answer = Math.max(answer, count); // 최대 탐험 가능 던전 수 갱신
    }
    
    permute(dungeons); // 순열 생성 및 탐험 시작
    return answer;
}