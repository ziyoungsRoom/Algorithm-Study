// 언어 : Javascript , (성공/실패) : 1/2 , 메모리 : 58752 KB , 시간 : 428 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const number_dot = input.map((dot) => dot.split(" ").map(Number));

// x 좌표 기준으로 오름차순 정렬 -> x 좌표 같을 경우, y 좌표 기준으로 오름차순 정렬
const sorted_dot = number_dot.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

const answer = sorted_dot.map((dot) => dot.join(" ")).join("\n");

console.log(answer);
