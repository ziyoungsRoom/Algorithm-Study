// 언어: JavaScript, (성공/실패): 1/3, 메모리: 68,212 KB, 시간: 3,612 ms
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const arrN = input[1].split(" ").map(Number);
const M = parseInt(input[2]);
const arrM = input[3].split(" ").map(Number);

const setN = new Set(arrN);
const result = [];
for (let i = 0; i < M; i++) {
  if (setN.has(arrM[i])) {
    result.push(1);
  } else {
    result.push(0);
  }
}

result.forEach((n) => {
  console.log(n);
});
