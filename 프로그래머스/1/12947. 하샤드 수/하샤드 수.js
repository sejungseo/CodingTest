function solution(x) {
    let arrX = String(x).split('');
    let sum = 0;

    for(let i = 0; i < arrX.length; i++) {
        sum += Number(arrX[i]);
    }
    return x % sum ? false : true;
}