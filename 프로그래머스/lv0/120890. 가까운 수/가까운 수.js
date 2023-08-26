function solution(array, n) {
    let sortedArr = array.sort(); // 가장 가까운 수가 여러 개일 경우 더 작은 수를 return하므로 array 정렬
    let absArr = []; // 절대값
    let minNum = 0 // 절대값 중 가장 작은 값
    for(let i = 0; i < sortedArr.length; i++){
        if(sortedArr[i] === n) {
            return n;
        } else {
            absArr.push(Math.abs(sortedArr[i] - n)); // Math.abs() 절대값 반환
        }
        for(let j = 0; j < absArr.length; j++){
            minNum = Math.min(...absArr); // 절대값이 가장 작은 값 확인
        }
    }
    return sortedArr[absArr.indexOf(minNum)];
}