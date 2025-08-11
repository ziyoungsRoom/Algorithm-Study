// 언어 : Javascript , (성공/실패) : 1/3 , 메모리 : 9344 KB , 시간 : 96 ms
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const spelling = input[0];

console.log(spelling.charCodeAt());
