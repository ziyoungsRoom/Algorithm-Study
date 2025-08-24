// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9448 KB , 시간 : 96 ms
// 문제 : 괄호 문자열(Parenthesis String, PS)은 두 개의 괄호 기호인 ‘(’ 와 ‘)’ 만으로 구성되어 있는 문자열이다. 그 중에서 괄호의 모양이 바르게 구성된 문자열을 올바른 괄호 문자열(Valid PS, VPS)이라고 부른다. 한 쌍의 괄호 기호로 된 “( )” 문자열은 기본 VPS 이라고 부른다. 만일 x 가 VPS 라면 이것을 하나의 괄호에 넣은 새로운 문자열 “(x)”도 VPS 가 된다. 그리고 두 VPS x 와 y를 접합(concatenation)시킨 새로운 문자열 xy도 VPS 가 된다. 예를 들어 “(())()”와 “((()))” 는 VPS 이지만 “(()(”, “(())()))” , 그리고 “(()” 는 모두 VPS 가 아닌 문자열이다. 
// 여러분은 입력으로 주어진 괄호 문자열이 VPS 인지 아닌지를 판단해서 그 결과를 YES 와 NO 로 나타내어야 한다. 
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const T = Number(lines[0]);

let out = [];
for (let i = 1; i <= T; i++) {
    const s = lines[i].trim();
    const stack = [];
    let ok = true;
    
    for (const ch of s) {
        if (ch == '(') {
            stack.push('(');
        } else {
            if (stack.length === 0) {
                ok = false;
                break;
            }
            stack.pop();
        }
    }
    out.push(ok && stack.length === 0 ? 'YES' : 'NO');
}

console.log(out.join('\n'));