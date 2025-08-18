// 언어: JavaScript, (성공/실패): 1/1, 메모리: 9344 KB, 시간: 96 ms
const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const [N, K] = input.map(Number);

const factorial = (n) => {
  let result = 1;
  while (n > 1) {
    result = result * n;
    n = n - 1;
  }
  return result;
};

const C = (n, k) => {
  return factorial(n) / (factorial(k) * factorial(n - k));
};

console.log(C(N, K));
