// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 52356 KB , 시간 : 352 ms

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const T = +input[0];

input.shift();

let result = [];

for (let i = 0; i < T; i++) {
  const N = +input[i * 3];
  const stickers = input
    .slice(i * 3 + 1, i * 3 + 3)
    .map((line) => line.split(' ').map(Number));

  const dp = [Array(N).fill(0), Array(N).fill(0)];

  // 초기값 설정
  dp[0][0] = stickers[0][0];
  dp[1][0] = stickers[1][0];

  if (N > 1) {
    dp[0][1] = dp[1][0] + stickers[0][1];
    dp[1][1] = dp[0][0] + stickers[1][1];

    // 점화식에 따른 dp 테이블 채우기
    for (let i = 2; i < N; i++) {
      dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + stickers[0][i];
      dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + stickers[1][i];
    }
  }

  result.push(Math.max(dp[0][N - 1], dp[1][N - 1]));
}

console.log(result.join('\n'));
