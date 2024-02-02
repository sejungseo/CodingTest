function solution(citations) {
    citations.sort((a, b) => b - a);
    let h;
    for(h = 0; h < citations.length; h++) {
        if(citations[h] <= h) {
            break;
        }
    }
    return h;
}