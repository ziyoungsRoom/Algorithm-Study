// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 12416 KB , 시간 : 160 ms

// 문제 : 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
// 명령은 총 여섯 가지이다.
// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const N = +input[0]; // 명령 개수

let queue = [];
let result = [];

for (let i = 1; i <= N; i++) {
  const cmd = input[i].split(" ");

  if (cmd[0] === "push") {
    queue.push(+cmd[1]); // 뒤에 넣기
  } else if (cmd[0] === "pop") {
    result.push(queue.length ? queue.shift() : -1); // 앞에서 꺼내기
  } else if (cmd[0] === "size") {
    result.push(queue.length);
  } else if (cmd[0] === "empty") {
    result.push(queue.length ? 0 : 1);
  } else if (cmd[0] === "front") {
    result.push(queue.length ? queue[0] : -1); // 맨 앞
  } else if (cmd[0] === "back") {
    result.push(queue.length ? queue[queue.length - 1] : -1); // 맨 뒤
  }
}

console.log(result.join("\n"));
