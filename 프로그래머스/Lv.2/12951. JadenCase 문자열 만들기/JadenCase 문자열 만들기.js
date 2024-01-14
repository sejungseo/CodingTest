function solution(s) {
    let arr = s.toLowerCase().split(' ');
    return arr.map(item => item.length > 0 ? item[0].toUpperCase() + item.slice(1) : null).join(' ');
}

// 공백문자가 연속해서 나올 경우 item[0]은 undefined가 될 수 있으며, 이를 toUpperCase() 메소드로 변환하려고 하면 런타임 에러 발생
// 문자열이 비어있는지 확인하고, 각 단어의 첫 문자가 실제로 존재하는지 확인하는 로직을 추가