// 배열 정렬 풀이
// function solution(participant, completion) {
//     participant.sort();
//     completion.sort();
//     for(let i = 0; i < participant.length; i++) {
//         if(participant[i] !== completion[i]) {
//             return participant[i];
//         }
//     }
// }

// Hash 풀이
function solution(participant, completion) {
    let hash = {}; // 해시 테이블 초기화
    
    participant.forEach(name => {
        if(hash[name]) { // 참가자 이름이 이미 해시 테이블에 있으면
            hash[name]++; // 해당 참가자 수 1 증가
        } else { // 참가자 이름이 해시 테이블에 없으면
            hash[name] = 1; // 해당 참가자 수 1로 설정
        }
    });
    // {
    //     "leo": 1,
    //     "kiki": 1,
    //     "eden": 1,
    // }
    
    completion.forEach(name => {
        hash[name]--; // 완주자 이름을 해시 테이블에서 찾아 해당 참가자 수 1 감소
    });
    // {
    //     "leo": 1,
    //     "kiki": 0,
    //     "eden": 0,
    // }
    
    for(let name in hash) {
        if(hash[name] > 0) {
            return name;
        }
    }
}
// for...in: 객체 키나 속성 이름을 순회할 때 사용
// for...of: 배열이나 반복 가능한 객체(배열, 문자열, Map, Set 등)의 값에 접근할 때 사용
