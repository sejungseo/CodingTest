function solution(s) {
    let arr = s.split('');
    return arr.length % 2 
        ? arr.splice(parseInt(arr.length / 2), 1).join('') 
        : arr.splice(parseInt(arr.length / 2) -1, 2).join('') ;
}