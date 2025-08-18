// 언어 : Javascript , (성공/실패) : 1/3 , 메모리 : 9336 KB , 시간 : 92 ms 

// 문제 : 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const maxValue = Math.max(...input);
const maxIndex = input.indexOf(maxValue) + 1; 

console.log(maxValue);
console.log(maxIndex);