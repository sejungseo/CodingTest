function solution(arr) {
    const min = Math.min(...arr);
    arr.splice(arr.indexOf(min), 1)
    return arr.length ? arr : [-1];
}

// indexOf 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환