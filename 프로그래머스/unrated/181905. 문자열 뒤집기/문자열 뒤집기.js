function solution(my_string, s, e) {
    let se = my_string.slice(s, e + 1);
    let reverse = my_string.substring(s, e + 1).split('').reverse().join('')
    return my_string.replace(se, reverse);
}