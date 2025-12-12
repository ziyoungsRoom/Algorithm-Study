// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 9604 KB , 시간 : 100 ms
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const costs = input.slice(1).map((house) => house.split(' ').map(Number));
const dp = Array.from({ length: N }, () => Array(3).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 0) {
      // 첫번째 집 색칠 비용
      dp[i][j] = costs[i][j];
    } else {
      // 이전 집에서 다른 색을 칠한 경우의 최솟값 + 현재 집 색칠 비용
      dp[i][j] =
        Math.min(dp[i - 1][(j + 1) % 3], dp[i - 1][(j + 2) % 3]) + costs[i][j];
    }
  }
}

console.log(Math.min(...dp[N - 1]));
