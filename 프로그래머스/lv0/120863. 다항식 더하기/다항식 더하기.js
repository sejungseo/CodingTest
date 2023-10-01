function solution(polynomial) {
    const arr = polynomial.split(' + ');
    let xnum = 0;
    let num = 0;
    
    arr.forEach(i => {
        if(i.includes('x')) {
            let xArr = i.split('x');  // x가 포함되어 있다면 x를 기준으로 split
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