// 언어 : Javascript , (성공/실패) : 2/3 , 메모리 : 9708 KB , 시간 : 96 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;

const queue = Array.from({ length: N }, (_, i) => i + 1);
let result = [];

// 투 포인터 : 시작 인덱스를 변수로 설정
let cur = 0;

while (queue.length > 0) {
  // cur : 삭제시킨 인덱스를 시작 인덱스로 설정
  cur = (cur + K - 1) % queue.length;

  result.push(queue[cur]);
  queue.splice(cur, 1);
}

const answer = "<" + result.join(", ") + ">";

console.log(answer);
