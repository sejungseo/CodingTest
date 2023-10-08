function solution(common) {
    const compare1 = common[1] - common[0];
    const compare2 = common[2] - common[1];
    const lastidx = common[common.length - 1];
    
    return compare1 === compare2 ? lastidx + compare1 : lastidx * (common[1] / common[0]);
}