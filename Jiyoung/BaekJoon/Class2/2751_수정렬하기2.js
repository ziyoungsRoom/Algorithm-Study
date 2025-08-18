// 언어 : Javascript , (성공/실패) : 1/3 , 메모리 : 210184 KB , 시간 : 1196 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const sorted_num = input.map(Number).sort((a, b) => a - b);

// 출력 최적화를 위해 배열을 \n join하여 출력.
console.log(sorted_num.join("\n"));
