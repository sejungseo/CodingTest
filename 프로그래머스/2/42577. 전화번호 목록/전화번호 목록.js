function solution(phone_book) {
    let answer = true;
    let sortedArr = phone_book.sort();
    for(let i = 0; i < sortedArr.length - 1; i++) {
        if(sortedArr[i + 1].startsWith(sortedArr[i])) {
            answer = false;
            break;
        } else {
            answer;
        }
    }
    return answer;
}