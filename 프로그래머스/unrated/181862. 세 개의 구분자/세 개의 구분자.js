function solution(myStr) {
    const splitStr = myStr.split(/[abc]/);
    const filteredStr = splitStr.filter(v => v.length > 0);
    return filteredStr.length > 0 ? filteredStr : ["EMPTY"];
}