// 언어 : Javascript , (성공/실패) : 2/3 , 메모리 : 12812 KB , 시간 : 164 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

let queue = [];
let result = [];

input.forEach((command) => {
  const [cmd, value] = command.split(" ");
  const len = queue.length;

  // switch문 : 명령어와 실행문을 명시적으로 매치 !
  switch (cmd) {
    case "push":
      queue.push(Number(value));
      break;
    case "empty":
      result.push(len > 0 ? 0 : 1);
      break;
    case "size":
      result.push(len);
      break;
    case "pop":
      result.push(len > 0 ? queue.shift() : -1);
      break;
    case "front":
      result.push(len > 0 ? queue[0] : -1);
      break;
    case "back":
      result.push(len > 0 ? queue[len - 1] : -1);
      break;
  }
});

// 입출력 최적화를 위해 미리 형변환 및 join 메소드 사용
result = result.map(Number).join("\n");

console.log(result);
