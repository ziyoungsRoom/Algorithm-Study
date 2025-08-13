// 언어 : Javascript , (성공/실패) : 2/5 , 메모리 : 92476 KB , 시간 : 380 ms

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num_array = input[1].split(" ").map(Number);

console.log(`${Math.min(...num_array)} ${Math.max(...num_array)}`);
