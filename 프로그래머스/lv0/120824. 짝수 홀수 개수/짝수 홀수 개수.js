function solution(num_list) {
    var even = num_list.filter(i => i % 2 === 0);
    var odd = num_list.filter(i => i % 2 !== 0);
    return [even.length, odd.length];
}