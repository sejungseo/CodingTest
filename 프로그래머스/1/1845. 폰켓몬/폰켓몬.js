function solution(nums) {
    let myCardCount = nums.length / 2;
    let cardTypeCount = [...new Set(nums)].length;

    return myCardCount > cardTypeCount ? cardTypeCount : myCardCount;
}