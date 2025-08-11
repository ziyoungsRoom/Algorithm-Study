// 언어 : Javascript , (성공/실패) : 1/3 , 메모리 : 9580 KB , 시간 : 100 ms
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i <= input.length; i++) {
  const [A, B] = input[i].split(" ");
  console.log(parseInt(A) + parseInt(B));
}
