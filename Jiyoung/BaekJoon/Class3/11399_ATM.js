// 언어 : Javascript , (성공/실패) : 1/4 , 메모리 : 9680 KB , 시간 : 100 ms
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const times = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let sum = 0;
let prefix = 0;

for (const time of times) {
  prefix += time;
  sum += prefix;
}

console.log(sum);
