function solution(spell, dic) {
    spell = spell.sort().join('');
    dic = dic.map(v => v.split('').sort().join(''));
    return dic.includes(spell) ? 1 : 2;
}