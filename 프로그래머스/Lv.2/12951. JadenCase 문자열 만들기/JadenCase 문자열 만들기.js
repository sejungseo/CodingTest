function solution(s) {
    let arr = s.toLowerCase().split(' ');
    return arr.map(item => item.length > 0 ? item[0].toUpperCase() + item.slice(1) : null).join(' ');
}