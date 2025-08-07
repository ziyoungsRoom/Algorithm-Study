// 언어 : Javascript , (성공/실패) : 2/4 , 메모리 : 9284 KB , 시간 : 88 ms
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const S = input[0];
const i = Number(input[1]);

console.log(S[i - 1]);
