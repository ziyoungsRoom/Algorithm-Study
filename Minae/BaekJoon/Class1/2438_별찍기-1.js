// 언어 : Javascript , (성공/실패) : 3/1 , 메모리 : 9332 KB , 시간 : 92 ms

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const number = parseInt(input[0]);

for (let i = 1; i <= number; i++) {
  console.log("*").repeat(i);
}
