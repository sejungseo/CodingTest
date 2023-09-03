function solution(array) {
    var answer = 0;
    let nums = array.join('');
    return nums.length - nums.replaceAll('7', '').length;
}