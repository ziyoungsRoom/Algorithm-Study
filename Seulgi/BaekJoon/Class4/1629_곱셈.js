// 언어 : Javascript , (성공/실패) : 1/2 , 메모리 : 9324 KB , 시간 : 92 ms

// 문제: A^B mod C 구하기 (B가 최대 21억)
// 핵심: 분할 정복으로 O(log B) 시간에 해결, BigInt로 큰 수 처리

const fs = require("fs");
const [A, B, C] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

function power(a, b, c) {
  // 기저 조건
  if (b === 0n) return 1n;
  if (b === 1n) return a % c;

  // 절반 계산 (재귀)
  const half = power(a, b / 2n, c);

  // 제곱하고 mod 연산
  const result = (half * half) % c;

  // 홀수면 a를 한 번 더 곱함
  return b % 2n === 0n ? result : (result * a) % c;
}

console.log(String(power(A, B, C)));
