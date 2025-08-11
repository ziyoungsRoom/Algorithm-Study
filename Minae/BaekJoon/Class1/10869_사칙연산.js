// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 9604 KB , 시간 : 148 ms
const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);
