function solution(n) {
    const binaryOneCount = (string) => string.toString(2).replaceAll('0', '').length;
    const nOneCount = binaryOneCount(n);
    let result = n + 1;
    while(n < result) {
        const resultOneCount = binaryOneCount(result);
        
        if(resultOneCount === nOneCount) {
            break;
        }
        result++;
    }
    return result;
}