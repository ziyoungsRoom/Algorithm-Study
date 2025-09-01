// 언어: JavaScript, (성공/실패): 1/1, 메모리: KB, 시간: ms

// 입력처리: utf8 인코딩으로 빠르게 읽어서 줄 단위로 분리(이제부터 이렇게 쓸 예정!!)
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const [N, ...commands] = input;

// 스택 역할을 할 배열 생성
let stack = [];

// 각 명령어 순회
for (let command of commands) {
  // 명령어를 공백으로 분리(예: "push 1" -> ["push", "1"])
  let parts = command.split(" ");

  // 명령어 종류별로 처리
  switch (parts[0]) {
    case "pop":
      // 스택이 비어있으면 -1, 아니면 맨 위 원소 제거 후 출력
      if (stack.length === 0) {
        console.log(-1);
      } else {
        console.log(stack.pop());
      }
      break;

    case "size":
      // 스택에 들어있는 원소의 개수 출력
      console.log(stack.length);
      break;

    case "empty":
      // 스택이 비어있으면 1, 아니면 0 출력
      stack.length === 0 ? console.log(1) : console.log(0);
      break;

    case "top":
      // 스택이 비어있으면 -1, 아니면 맨 위 원소 출력
      stack.length === 0
        ? console.log(-1)
        : console.log(stack[stack.length - 1]);
      break;

    case "push":
      // parts[1]을 스택에 추가
      stack.push(parts[1]);
      break;
  }
}
