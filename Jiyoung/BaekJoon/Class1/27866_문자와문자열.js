// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 9336 KB , 시간 : 88 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [S, i] = input;

console.log(S[i - 1]);
