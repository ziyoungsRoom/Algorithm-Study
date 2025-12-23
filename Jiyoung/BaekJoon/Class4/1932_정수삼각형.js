// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 15232 KB , 시간 : 180 ms

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const N = input[0];
const triangle = input.slice(1).map((line) => line.split(' ').map(Number));

const dp = Array.from({ length: N }, (_, i) => Array(i + 1).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    if (i === 0 && j === 0) {
      // 첫 번째 원소 초기화
      dp[i][j] = triangle[i][j];
    } else {
      // 왼쪽 위 또는 바로 위에서 오는 경로 중 최대값에 현재 원소 더하기
      dp[i][j] =
        Math.max(dp[i - 1][j - 1] || 0, dp[i - 1][j] || 0) + triangle[i][j];
    }
  }
}

console.log(Math.max(...dp[N - 1]));
