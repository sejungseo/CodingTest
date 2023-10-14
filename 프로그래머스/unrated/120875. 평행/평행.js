function solution(dots) {
  var answer = 0;

    // 선분이 평행하다 == 기울기가 같다
  function calculation(a, b, c, d) { // 기울기 계산 함수
    let abDiff, cdDiff;

    abDiff = (b[1] - a[1]) / (b[0] - a[0]); // 기울기 = y좌표 변화량 / x좌표 변화량
    cdDiff = (d[1] - c[1]) / (d[0] - c[0]);

    if (abDiff === cdDiff) { // 기울기가 같으면(평행하면)
      answer += 1;
    }
  }

  // 1-2, 3-4가 이어졌을 때
  calculation(dots[0], dots[1], dots[2], dots[3]); 
    // abDiff (2-4) / (9-1) = -4
    // cdDiff (6-8) / (11-3) = -4

  // 1-3, 2-4가 이어졌을 때
  calculation(dots[0], dots[2], dots[1], dots[3]);
    // abDiff (8-4) / (3-1) = 2
    // cdDiff (6-2) / (11-9) = 2

  // 1-4, 2-3가 이어졌을 때
  calculation(dots[0], dots[3], dots[1], dots[2]);
    // abDiff (6-4) / (11-1) = 0.5
    // cdDiff (8-2) / (3-9) = -1

  return answer > 0 ? 1 : 0;
}