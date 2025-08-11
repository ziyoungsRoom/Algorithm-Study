// 언어 : Javascript , (성공/실패) : 2/1 , 메모리 : 9588 KB , 시간 : 96 ms
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const number = input[1].split("");

let sum = 0;

for (let i = 0; i < number.length; i++) {
  sum += parseInt(number[i]);
}

console.log(sum);
