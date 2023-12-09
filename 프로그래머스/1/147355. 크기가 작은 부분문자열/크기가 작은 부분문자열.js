function solution(t, p) {
    let answer = [];
    const slicedArr = [];
    for(let i = 0; i < t.length - p.length + 1; i++) {
        slicedArr.push(t.slice(i, i + p.length));
    }
    return slicedArr.filter(v => parseInt(v) <= parseInt(p)).length;
}