function solution(name, yearning, photo) {
    const scoreMap = {};
    for(let i = 0; i < name.length; i++) {
        scoreMap[name[i]] = yearning[i];
    }
    
    const scores = photo.map(pic => {
        return pic.reduce((sum, person) => {
            return sum + (scoreMap[person] || 0);
        }, 0);
    });
    
    return scores;
}