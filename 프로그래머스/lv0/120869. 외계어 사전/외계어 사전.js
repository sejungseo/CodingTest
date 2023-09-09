function solution(spell, dic) {
    spell = spell.sort().join(''); // 문자열 정렬
    dic = dic.map(v => v.split('').sort().join('')); // 배열의 각 요소 정렬
    return dic.includes(spell) ? 1 : 2;
}
// map => 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환