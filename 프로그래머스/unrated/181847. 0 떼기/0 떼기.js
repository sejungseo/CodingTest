function solution(n_str) {
    const firstNonZeroIndex = n_str.search(/[1-9]/);
    
    return n_str.slice(firstNonZeroIndex);
}