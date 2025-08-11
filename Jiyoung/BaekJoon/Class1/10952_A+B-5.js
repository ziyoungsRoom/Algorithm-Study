// 언어 : Javascript , (성공/실패) : 2/10 , 메모리 : 9596 KB , 시간 : 104 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.map((test) => {
  let [A, B] = test.split(" ").map(Number);
  if (A !== 0 && B !== 0) console.log(A + B);
  else console.log("");
});
