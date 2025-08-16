// 언어: JavaScript, (성공/실패): 3/1, 메모리: 212,244 KB, 시간: 1,204 ms
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const number = input.slice(1).map(Number);
const sortNumber = number.sort((a, b) => a - b);

console.log(sortNumber.join("\n"));
