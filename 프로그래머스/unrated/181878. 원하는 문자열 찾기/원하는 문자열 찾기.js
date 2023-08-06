function solution(myString, pat) {
    let newstr = myString.toLowerCase();
    let newpat = pat.toLowerCase();
    return newstr.includes(newpat) ? 1 : 0;
}