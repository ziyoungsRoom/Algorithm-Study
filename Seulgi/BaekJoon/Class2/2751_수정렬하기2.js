// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 211476 KB , 시간 : 1220 ms

// 문제 : N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");
const n = Number(input[0]);
const numbers = input.slice(1).map(Number);

numbers.sort((a, b) => a - b);

console.log(numbers.join("\n"));