// 언어 : Javascript , (성공/실패) : 1/4 , 메모리 : 9332 KB , 시간 : 92 ms

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num_array = input.map(Number);
const max_num = Math.max(...num_array);

console.log(max_num);
console.log(num_array.indexOf(max_num) + 1);
