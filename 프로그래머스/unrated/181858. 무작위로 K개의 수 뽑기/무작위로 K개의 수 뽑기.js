function solution(arr, k) {
    let filteredArr = [...new Set(arr)];
    
    if(filteredArr.length > k) {
        filteredArr.splice(k)
    } else {
        while(filteredArr.length < k) {
            filteredArr.push(-1)
        }
    }
    return filteredArr;
}