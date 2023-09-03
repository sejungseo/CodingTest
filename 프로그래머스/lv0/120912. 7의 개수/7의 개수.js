function solution(array) {
    let nums = array.join('');
    return nums.length - nums.replaceAll('7', '').length;
}