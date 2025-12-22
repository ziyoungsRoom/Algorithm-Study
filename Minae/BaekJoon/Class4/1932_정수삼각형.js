// 언어: JavaScript, (성공/실패): (1/1), 메모리: 16,744 KB, 시간: 184 ms
const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

// 삼각형의 높이 n
const n = parseInt(input[0]);

// 정수 삼각형을 2차원 배열로 저장
const triangle = [];
for (let i = 1; i <= n; i++) {
  triangle.push(input[i].split(' ').map(Number));
}

// dp[i][j] = (i, j) 위치까지 내려왔을 때 얻을 수 있는 최대 합
const dp = Array.from({ length: n }, () => Array(n).fill(0));
// 초기값: 맨 꼭대기 하나
dp[0][0] = triangle[0][0];
// 두 번째 줄부터 마지막 줄까지 DP 계산
for (let i = 1; i < n; i++) {
  // i번째 줄에는 0 ~ i까지의 값이 존재
  for (let j = 0; j <= i; j++) {
    // 맨 왼쪽 값: 위에서 바로 내려오는 경우만 가능
    if (j === 0) {
      dp[i][j] = dp[i - 1][j] + triangle[i][j];
      // 맨 오른쪽 값: 왼쪽 대각선 위에서만 내려올 수 있음
    } else if (j === i) {
      dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      // 그 외의 경우:
      // 외쪽 대각선 위와 오른쪽 대각선 위 중
      // 더 큰 누적 합을 선택
    } else {
      dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }
}
// 미지막 줄에서 가장 큰 값이
// 맨 위부터 내려올 수 있는 경로 중 최대 합
console.log(Math.max(...dp[n - 1]));
