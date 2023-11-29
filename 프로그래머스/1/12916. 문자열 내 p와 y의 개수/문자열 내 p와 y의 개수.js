function solution(s){
    let pLen = s.toLowerCase().split('').filter(v => v === 'p').length;
    let yLen = s.toLowerCase().split('').filter(v => v === 'y').length;

    return pLen === yLen ? true : false;
}