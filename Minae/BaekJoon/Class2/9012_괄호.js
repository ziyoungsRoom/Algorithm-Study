// 언어: JavaScript, (성공/실패): 1/1, 메모리: 9,424 KB, 시간: 152 ms
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0]);
const result = [];

for (let i = 1; i <= T; i++) {
  const parenthesis = input[i];

  // 1단계: 홀수 길이면 무조건 짝이 안 맞으므로 "NO"
  if (parenthesis.length % 2 === 1) {
    result.push("NO");
    continue;
  }

  const stack = []; // 괄호를 저장할 스택
  let isValid = true; // break로 나갔는지 확인용

  // 2단계: 문자열의 각 문자를 하나씩 검사
  for (let char of parenthesis) {
    // 여는 괄호는 스택에 추가
    if (char === "(") {
      stack.push("(");
    } else if (char === ")") {
      // 닫는 괄호인데 매칭될 여는 괄호가 없으면
      if (stack.length === 0) {
        result.push("NO");
        isValid = false;
        break;
      }
      // 매칭되는 여는 괄호 제거
      stack.pop();
    }
  }

  // 3단계: break 안 했으면 스택 상태 확인
  if (isValid) {
    if (stack.length === 0) {
      result.push("YES");
    } else {
      result.push("NO");
    }
  }
}

console.log(result.join("\n"));
