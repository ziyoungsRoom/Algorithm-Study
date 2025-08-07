// 언어 : Javascript , (성공/실패) : 1/5 , 메모리 : 9322 KB , 시간 : 96 ms
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const S = input[0];
const i = Number(input[1]);

console.log(S[i - 1]);
