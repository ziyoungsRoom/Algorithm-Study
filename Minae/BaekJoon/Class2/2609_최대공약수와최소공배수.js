// 언어: JavaScript, (성공, 실패): 1/0, 메모리: 9604 KB, 시간 100 ms
const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const [A, B] = input.map(Number);

const gcd = (a, b) => {
  while (b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }
  return a;
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

console.log(gcd(A, B));
console.log(lcm(A, B));
