function solution(polynomial) {
    const arr = polynomial.split(' + '); // ' + ' 기준으로 나누어 배열 arr 생성
    let xnum = 0; // x의 수
    let num = 0; // 정수의 수
    
    arr.forEach(i => {
        if(i.includes('x')) {
            let xArr = i.split('x'); // x가 포함되어 있다면 x를 기준으로 나누어 xArr 생성
            if(xArr[0] === ''){ 
                xnum += 1;
            } else if(xArr[0] !== '') {
                xnum += parseInt(xArr[0]);
            }
        } else {
            num += parseInt(i);
        }
    })
    if(xnum === 0 && num === 0) {
        return '';
    } else if (xnum === 1 && num === 0) {
        return 'x';
    } else if (xnum === 0 && num > 0) {
        return `${num}`;
    } else if (xnum === 1 && num > 0) {
        return `x + ${num}`;
    } else if (xnum > 0 && num === 0) {
        return `${xnum}x`
    } else if (xnum > 0 && num > 0) {
        return `${xnum}x + ${num}`
    }
}