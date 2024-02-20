function solution(operations) {
    const q = [];
    
    for(let i = 0; i < operations.length; i ++){
        const [command, num] = operations[i].split(" ");
        if(command === "I") {
            q.push(num);
        } else if(q.length !== 0){
            if(num === "1"){
                q.sort((a, b) => a - b);
                q.pop();
            } else {
                q.sort((a, b) => b - a);
                q.pop();
            }
        }
    }
    q.sort((a, b) => a - b);
    return q.length === 0 ? [0,0] : [+q[q.length - 1], +q[0]];
}