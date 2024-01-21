function solution(clothes) {
    let clothesMap = new Map(); // 종류 저장할 Map 생성
    
    for(let i = 0; i < clothes.length; i++) {
        let type = clothes[i][1]; // 현재 의상의 종류
        if(clothesMap[type]) { // 이미 해당 종류의 의상이 Map에 있으면 옵션 1 증가
            clothesMap[type]++;
        } else { // 해당 종류의 의상이 처음이면 2로 시작(아무것도 선택하지 않는 경우 포함)
            clothesMap[type] = 2;
        }
    }

    let answer = 1;// 모든 조합의 수를 저장할 변수
    for(let type in clothesMap) { // clothesMap을 순회하며 각 종류별 옵션 수 곱하기
        answer *= clothesMap[type];
    }
    return answer - 1; // 모든 옵션의 조합 중에서 아무것도 선택하지 않는 경우 제외
}