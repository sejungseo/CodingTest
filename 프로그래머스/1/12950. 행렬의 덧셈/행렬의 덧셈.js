function solution(arr1, arr2) {
    return arr1.map((value1, i) =>
                   value1.map((value2, j) => value2 + arr2[i][j]));
}