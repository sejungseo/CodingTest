function solution(num_list, n) {
    var answer = [];
    let sliceList = num_list.splice(0, n);
    return num_list.concat(sliceList);
}