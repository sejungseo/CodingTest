function solution(dots) {
    let xarr = [];
    let yarr = [];
    let xlen = 0;
    let ylen = 0;
    
    for(let i = 0; i < dots.length; i++) {
        xarr.push(dots[i][0]);
        yarr.push(dots[i][1]);
    } 
    xlen = Math.max(...xarr) - Math.min(...xarr);
    ylen = Math.max(...yarr) - Math.min(...yarr);
    return xlen * ylen;
}