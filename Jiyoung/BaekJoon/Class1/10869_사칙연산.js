// 언어 : Javascript , (성공/실패) : 1/4 , 메모리 : 9612 KB , 시간 : 96 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const [A, B] = input;

console.log(A + B);
console.log(A - B);
console.log(A * B);
// 몫만 출력하기 위해 내림 연산 추가
console.log(Math.floor(A / B));
console.log(A % B);
