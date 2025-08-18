// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 95580 KB , 시간 : 376 ms

// 문제 : N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input[1].split(' ').map(Number);

const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

console.log(minValue, maxValue);