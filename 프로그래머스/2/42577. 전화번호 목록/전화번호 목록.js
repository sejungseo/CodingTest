// function solution(phone_book) {
//     let answer = true;
//     let sortedArr = phone_book.sort(); // 배열 정렬 후 인접한 요소 비교
//     console.log(sortedArr)
//     for(let i = 0; i < sortedArr.length - 1; i++) {
//         if(sortedArr[i + 1].startsWith(sortedArr[i])) {
//             answer = false;
//             break;
//         } else {
//             answer;
//         }
//     }
//     return answer;
// }

function solution(phone_book) {
    let phoneMap = new Map(); // 전화번호 저장할 Map 객체 생성
    
    // 전화번호 목록의 각 번호 반복
    for(let number of phone_book) {
        phoneMap.set(number, true); // 현재 번호를 phoneMap에 저장
    }
    
    // 전화번호 목록의 각 번호 재반복
    for(let number of phone_book) {
        for(let i = 1; i < number.length; i++) { // 현재 번호의 접두어 반복
            let prefix = number.substring(0, i); // 현재 번호의 접두어
            if(phoneMap.has(prefix)) {
                return false;
            }
        }
    }
    return true;
}