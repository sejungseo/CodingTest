function solution(num_str) {
    let num_list = num_str.split('');
    return [...num_list].reduce((a, c) => a + parseInt(c), 0);
}