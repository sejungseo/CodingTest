function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    for(let i = 0; i < sizes.length; i++) {
        let [w, h] = sizes[i];
        
        // 긴 쪽을 가로, 짧은 쪽을 세로로 설정
        if(w < h) {
            [w, h] = [h, w];
        }
        
        maxWidth = Math.max(maxWidth, w);
        maxHeight = Math.max(maxHeight, h);
    }
    return maxWidth * maxHeight;
}