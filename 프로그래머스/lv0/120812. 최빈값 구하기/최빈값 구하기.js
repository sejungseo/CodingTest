function solution(array) {
    let count = {}; // 각 숫자의 등장 횟수를 저장하는 객체
    let maxCount = 0; // 최빈값
    let answer = []; // 최빈값을 저장할 배열

    // 배열을 순회하면서 각 숫자의 등장 횟수를 계산
    for (let num of array) {
        if (count[num]) { // count에 해당 숫자가 있다면
            count[num]++; // 숫자의 등장 횟수 1 추가
        } else {
            count[num] = 1; // 없다면 등장 횟수는 1
        }

        if (count[num] > maxCount) { // 현재 숫자의 등장 횟수가 최빈값보다 큰 경우
            maxCount = count[num]; // 최빈값에 해당 숫자 할당
            answer = [num];  // 최빈값 배열을 해당 숫자로 초기화
        } else if (count[num] === maxCount) {
            answer.push(num); // 현재 숫자의 등장 횟수가 최빈값과 같은 경우, answer에 추가
        }
    }

    // 최빈값이 하나인 경우 해당 값 반환
    // 여러 개인 경우 -1을 반환
    return answer.length === 1 ? answer[0] : -1;
}