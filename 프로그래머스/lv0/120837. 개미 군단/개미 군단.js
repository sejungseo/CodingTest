function solution(hp) {
    let ant1 = ~~(hp / 5);
    let ant2 = ~~(hp % 5 / 3);
    let ant3 = hp % 5 % 3;
    return ant1 + ant2 + ant3;
}