// 문제 : N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const numbers = input[1];

let sum = 0;
for (let i = 0; i < N; i++){
    sum += Number(numbers[i]);
}

console.log(sum);