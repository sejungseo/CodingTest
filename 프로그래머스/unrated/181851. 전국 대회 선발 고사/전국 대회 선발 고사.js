function solution(rank, attendance) {
    let canAttendance = [];
    for(let i = 0; i < rank.length; i++) {
        if(attendance[i]) {
            canAttendance.push({number: i, rank: rank[i]});
        }
    }
    canAttendance.sort((a, b) => a.rank - b.rank);
    
    let a = canAttendance[0].number;
    let b = canAttendance[1].number;
    let c = canAttendance[2].number;
    
    return 10000 * a + 100 * b + c;
}