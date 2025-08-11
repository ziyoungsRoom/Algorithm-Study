// 언어 : Javascript , (성공/실패) : 1/9 , 메모리 : 9588 KB , 시간 : 100 ms

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const num = input[1].split("").map(Number);
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += num[i];
}

console.log(sum);
