function solution(progresses, speeds) {
    let daysLeft = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx])); // 남은 일수 계산
    let maxDay = daysLeft[0]; // 최초 배포일
    let count = 0; // 배포되는 기능의 수를 세기 위한 변수
    let answer = []; // 배포되는 기능의 수를 저장할 배열
    
    for(const day of daysLeft) {
        if(day <= maxDay) { // 현재 기능이 이전 기능과 함께 배포될 경우,
            count++; // 기능의 수 증가
        } else { // 현재 기능이 새로운 배포일에 배포될 경우,
            answer.push(count); // 지금까지 센 기능의 수를 answer에 추가
            count = 1; // 기능의 수 1로 초기화
            maxDay = day; // 최초 배포일을 현재 기능의 완료 일수로 설정
        }
    }
    answer.push(count); // 마지막으로 센 기능의 수를 answer에 추가
    return answer;
}