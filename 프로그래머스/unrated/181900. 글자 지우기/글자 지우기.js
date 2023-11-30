function solution(my_string, indices) {
    let answer = '';
    let arr = my_string.split('');
    indices.sort((a, b) => a - b);
    
    for(let i = indices.length - 1; i >= 0; i--) {
        arr.splice(indices[i], 1); // 뒤에서부터 문자 제거
    }
    return arr.join('');
}