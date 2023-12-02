function solution(myString, pat) {
    let temp = [];
    for(let i = 0; i < myString.length; i++) {
        let subStr = myString.slice(0, i + 1);
        if(subStr.endsWith(pat)) {
            temp.push(subStr);
        }
    }
    return temp.pop();
}