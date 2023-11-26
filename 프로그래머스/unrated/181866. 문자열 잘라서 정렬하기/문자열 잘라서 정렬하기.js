function solution(myString) {
    let answer = [];
    let arr = myString.split('x');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== '') {
            answer.push(arr[i]);
        }
    }
    return answer.sort();
}