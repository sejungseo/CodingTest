function solution(s) {
    return s.split(' ').map(v => {
        return v.split('').map((char, idx) => {
            return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join('');
    }).join(' ');
}