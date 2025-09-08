// 언어: JavaScript, (성공/실패): 1/6, 메모리: 9,648, 시간: 96 ms

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const N = +input[0];
const times = input[1].split(" ").map(Number);

let result = 0;
times.sort((a, b) => a - b);
for (let i = 0; i < N; i++) {
  result += times[i] * (N - i);
}

console.log(result);
