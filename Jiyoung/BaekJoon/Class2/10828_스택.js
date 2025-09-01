// 언어 : Javascript , (성공/실패) : 2/3 , 메모리 : 12728 KB , 시간 : 168 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

let stack = [];
let result = [];

input.forEach((command) => {
  const [cmd, value] = command.split(" ");
  const len = stack.length;

  // switch문 : 명령어와 실행문을 명시적으로 매치 !
  switch (cmd) {
    case "push":
      stack.push(Number(value));
      break;
    case "top":
      result.push(len > 0 ? stack[len - 1] : -1);
      break;
    case "empty":
      result.push(len > 0 ? 0 : 1);
      break;
    case "size":
      result.push(len);
      break;
    case "pop":
      result.push(len > 0 ? stack.pop() : -1);
      break;
  }
});

console.log(result.map(Number).join("\n"));
