function solution(my_string) {
    let answer = 0;
    let arr = my_string.split(' '); // arr = ["3", "+", "4"]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '+') {
            answer += Number(arr[i+1]); 
        } else if(arr[i] === '-') {
            answer -= Number(arr[i+1]);
        } 
    }
    return answer + Number(arr[0]);
}
