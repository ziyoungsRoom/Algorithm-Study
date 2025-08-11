// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 9604 KB , 시간 : 96 ms

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const A = input[0];
const B = input[1];

console.log(A / B);
