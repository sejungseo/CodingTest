function solution(emergency) {
    let order = emergency.slice().sort((a, b) => b - a); // slice() => 원본 배열 바뀌지 않고 복사본 생성
    return emergency.map(v => order.indexOf(v)+1);
}