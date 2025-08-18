// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 9700 KB , 시간 : 140 ms
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = parseInt(input[0]);
const numbers = input[1].split(" ").map(Number);

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let count = 0;
for (let j = 0; j < N; j++) {
  if (isPrime(numbers[j])) {
    count++;
  }
}
console.log(count);
