// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 89556 KB , 시간 : 4216 ms

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = input.slice(1, N + 1).map((line) => line.split(' ').map(Number));
const coordinates = input
  .slice(N + 1)
  .map((line) => line.split(' ').map(Number));

const dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

// 초기값 설정
dp[1][1] = graph[0][0];

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    // 첫번째 행 또는 첫번째 열인 경우 예외 처리
    if (i === 1) dp[i][j] = graph[i - 1][j - 1] + dp[i][j - 1];
    else if (j === 1) dp[i][j] = graph[i - 1][j - 1] + dp[i - 1][j];
    // 그 외의 경우 누적합 계산
    else {
      dp[i][j] =
        graph[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
    }
  }
}

for (let k = 0; k < M; k++) {
  const [x1, y1, x2, y2] = coordinates[k];
  // 누적합을 이용한 구간 합 계산
  const result =
    dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];
  console.log(result);
}
