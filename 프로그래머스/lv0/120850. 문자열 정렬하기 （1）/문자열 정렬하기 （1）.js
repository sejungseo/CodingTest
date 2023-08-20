function solution(my_string) {

    return my_string.split('').filter((v) => v < 10).sort((a, b) => a - b).map(Number);

}