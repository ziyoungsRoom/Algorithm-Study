// 언어 : Javascript , (성공/실패) : 1/4 , 메모리 : 9336 KB , 시간 : 96 ms

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const [N, K] = input.map(Number);

// 이항계수 (N, K) = N! / K!*(N-K)! 식 활용
// 팩토리얼 N! = N*(N-1)*...*1 식을 재귀함수로 구성
const factorial = (num) => {
  // 0! 은 1이라고 합니다.
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
};

const result = factorial(N) / (factorial(K) * factorial(N - K));

console.log(result);
