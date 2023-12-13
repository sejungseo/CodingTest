function solution(arr) {
    let row = arr.length;
    let col = arr[0].length;
    
    if(row > col) {
        for(let i = 0; i < row; i++) {
            while(arr[i].length < row) {
                arr[i].push(0);
            }
        }
    } else if(col > row) {
            while(arr.length < col) {
                arr.push(new Array(col).fill(0))
            }
        }
    return arr;
}