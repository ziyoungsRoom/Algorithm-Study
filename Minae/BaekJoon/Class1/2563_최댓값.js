// 언어 : Javascript , (성공/실패) : 1/6 , 메모리 : 9328 KB , 시간 : 92 ms
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const numbers = input.map((n) => Number(n));

const maxValue = Math.max(...numbers);
const position = numbers.indexOf(maxValue);

console.log(maxValue, position + 1);
