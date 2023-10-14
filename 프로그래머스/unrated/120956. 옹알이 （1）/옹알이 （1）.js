function solution(babbling) {
    let answer = 0;
    let can = ["aya", "ye", "woo", "ma"]; // 발음 가능한 단어 배열
    
    for(let i in babbling) {
        let word = babbling[i];
        
        for(let j in can) {
            if(word.includes(can[j])) {
                word = word.replace(can[j], "x");
            }
        }
        word = word.replaceAll("x", "");
        if(word.length === 0) {
            answer++;
        }
    }
    return answer;
}