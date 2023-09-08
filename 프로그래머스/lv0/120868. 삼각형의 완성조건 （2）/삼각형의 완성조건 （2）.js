function solution(sides) {
    return Math.min(...sides) * 2 - 1;
}

// 아는 변이 가장 긴 경우
// max < min + i => max - min < i
// 모르는 변이 가장 긴 경우
// i < max + min
//=> max - min < i < max + min
//=> (max + min) - (max - min) + 1
//=> min * 2 + 1