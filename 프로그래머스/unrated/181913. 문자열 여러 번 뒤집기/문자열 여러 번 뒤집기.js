function solution(my_string, queries) {
    queries.forEach(query => {
        let [start, end] = query;
        let part1 = my_string.substring(0, start);
        let partToReverse = my_string.substring(start, end + 1);
        let part2 = my_string.substring(end + 1);
        
        my_string = part1 + partToReverse.split('').reverse().join('') + part2;
    })
    return my_string;
}