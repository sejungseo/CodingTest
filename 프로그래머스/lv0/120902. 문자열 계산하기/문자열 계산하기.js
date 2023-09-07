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

// 문자열로 된 연산식은 eval()로 계산할 수 있지만 해커가 위험한 코드를 사용할 수 있습니다. eval을 절대 사용하지 말 것!
