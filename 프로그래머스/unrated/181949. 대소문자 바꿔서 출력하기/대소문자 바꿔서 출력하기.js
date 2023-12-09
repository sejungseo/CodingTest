const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    let answer = '';
    for(let i of str) {
        if(i === i.toUpperCase()) {
            answer += i.toLowerCase();
        } else {
            answer += i.toUpperCase();
        }
    }
    
    console.log(answer);
});