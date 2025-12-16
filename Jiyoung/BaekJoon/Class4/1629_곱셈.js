// 언어 : Javascript , (성공/실패) : 1/5 , 메모리 : 9328 KB , 시간 : 92 ms
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');
const [A, B, C] = input.map(BigInt); // BigInt로 형변환

const solve = (power) => {
  if (power === 1n) {
    return A % C;
  }

  const half = solve(power / 2n) % C;

  // power가 홀수인 경우
  if (power % 2n) {
    return (half * half * (A % C)) % C;
  }

  // power가 짝수인 경우
  return (half * half) % C;
};

// n을 제거하기 위해 String 으로 변환
console.log(solve(B).toString());
