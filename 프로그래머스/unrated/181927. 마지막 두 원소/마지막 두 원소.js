function solution(num_list) {
    var answer = [];
    let last = num_list[num_list.length - 1];
    let second_last = num_list[num_list.length - 2];
    
    if (last > second_last) {
        num_list.push(last - second_last);
    } else {
        num_list.push(last * 2);
    }     
        return num_list;
    }