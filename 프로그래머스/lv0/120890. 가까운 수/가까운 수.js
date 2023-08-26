function solution(array, n) {
    let sortedArr = array.sort();
    let absArr = [];
    let minNum = 0
    for(let i = 0; i < sortedArr.length; i++){
        if(sortedArr[i] === n) {
            return n;
        } else {
            absArr.push(Math.abs(sortedArr[i] - n));
        }
        for(let j = 0; j < absArr.length; j++){
            minNum = Math.min(...absArr);
        }
    }
    return sortedArr[absArr.indexOf(minNum)];
}