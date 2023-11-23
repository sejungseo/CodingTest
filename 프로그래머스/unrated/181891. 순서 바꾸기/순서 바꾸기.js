function solution(num_list, n) {
    return num_list.concat(num_list.splice(0, n));
}