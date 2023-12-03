function solution(phone_number) {
    let star = phone_number.split('').slice(0, -4).map(v => v = '*').join('')
    let number = phone_number.split('').splice(-4).join('')
    return star + number;
}