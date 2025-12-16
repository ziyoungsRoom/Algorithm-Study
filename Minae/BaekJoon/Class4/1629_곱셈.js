// 언어: JavaScript, (성공/실패): (1/8), 메모리: 9,328 KB, 시간: 92 ms
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
// A, B, C를 BigInt로 변환
// A^B 계산 과정에서 숫자가 매우 커지기때문에 BigInt 필수
const [A, B, C] = input.split(' ').map(BigInt);

// 분할 정복을 이용한 거듭제곱(power: 거듭제곱, Modulo: 나눈 나머지)
const powerModulo = (a, b) => {
  if (b === 0n) return 1n;
  if (b === 1n) return a;

  // 지수를 반으로 나누어 재귀 호출
  // a^(b/2)를 미리 계산
  const half = powerModulo(a, b / 2n);
  // 짝수 지수일 경우
  let res = (half * half) % C;
  // 홀수 지수일 경우
  // a를 한번 더 곱해줘야 함
  if (b % 2n === 1n) {
    res = (res * a) % C;
  }
  return res;
};
// 처음부터 A를 C로 나눈 나머지로 시작해도 결과는 동일
// BigInt 결과를 문자열로 변환해서 출력
console.log(String(powerModulo(A % C, B)));
