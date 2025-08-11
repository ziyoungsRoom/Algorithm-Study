// 언어 : Javascript , (성공/실패) : 2/10 , 메모리 : 9596 KB , 시간 : 96 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let i = 0;

while (true) {
  try {
    let [A, B] = input[i].split(" ").map(Number);
    console.log(A + B);
    i++;
  } catch {
    break;
  }
}
