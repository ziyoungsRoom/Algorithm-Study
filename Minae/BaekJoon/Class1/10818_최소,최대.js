// 언어 : Javascript , (성공/실패) : 1/2 , 메모리 : 94132 KB , 시간 : 436 ms
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const numbers = input[1].split(" ").map((n) => Number(n));
const maxValue = Math.max(...numbers);
const minValue = Math.min(...numbers);

console.log(minValue, maxValue);
