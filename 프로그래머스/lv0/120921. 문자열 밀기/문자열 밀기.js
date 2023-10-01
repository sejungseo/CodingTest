function solution(A, B) {
    let arrA = [...A]; // 문자열A를 배열arrA로 변환
    for(let i = 0; i < arrA.length; i++) {
        if(A === B) 
            return 0; 
        else {
        arrA.unshift(arrA.pop()); // arrA의 마지막 원소를 잘라내고 맨 앞에 붙이기
        if(arrA.join('') === B) // arrA를 문자열로 변환하고 문자열 B와 일치하는지 확인
            return i + 1;
        }
    } 
    return -1;
}