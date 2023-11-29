function solution(arr, intervals) {
    let firstSection = arr.slice(intervals[0][0],intervals[0][1]+1);
    let secondSection = arr.slice(intervals[1][0],intervals[1][1]+1);
    return firstSection.concat(secondSection);
}