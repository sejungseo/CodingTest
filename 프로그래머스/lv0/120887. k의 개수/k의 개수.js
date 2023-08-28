function solution(i, j, k) {
    let answer = 0;
    let num_list = '';
    for(i; i <= j; i++){
        num_list += i;
    } 
    return num_list.length - num_list.replaceAll(k, '').length; // 전체길이 - k를 제외한 길이
} 