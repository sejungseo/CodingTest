function solution(numbers) {
    let num_str = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let num_char = ["0","1","2","3","4","5","6","7","8","9"];
    
    for(let i = 0; i < num_str.length; i++){
        numbers = numbers.replaceAll(num_str[i], num_char[i]);
    }
    
    return parseInt(numbers);
}