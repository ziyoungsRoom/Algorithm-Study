// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 12868 KB , 시간 : 168 ms

// 문제 : 정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
// 명령은 총 다섯 가지이다.
// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = +input[0];
const stack = [];
const result = [];

for (let i = 1; i <= N; i++) {
  const [cmd, value] = input[i].split(" ");

  if (cmd === "push") {
    stack.push(+value);
  } else if (cmd == "pop") {
    result.push(stack.length ? stack.pop() : -1);
  } else if (cmd == "size") {
    result.push(stack.length);
  } else if (cmd == "empty") {
    result.push(stack.length ? 0 : 1);
  } else if (cmd == "top") {
    result.push(stack.length ? stack[stack.length - 1] : -1);
  }
}

console.log(result.join("\n"));
