// function solution(n) {
//     let answer = '';
//     for(let i = 0; i < n; i++) {
//         if(i % 2 === 0) answer += "수";
//         else answer+= "박";
//     }
//     return answer;
// }

const solution = n => "수박".repeat(n).slice(0,n);