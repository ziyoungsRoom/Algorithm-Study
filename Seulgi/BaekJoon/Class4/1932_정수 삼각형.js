// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 15292 KB , 시간 : 180 ms

// 문제: 삼각형 꼭대기→바닥 경로 합의 최댓값 (대각선 이동만 가능)
// 핵심: dp[i][j] = 현재 값 + max(위 두 경로)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const triangle = [];

// 삼각형 입력받기
for (let i = 1; i <= n; i++) {
  triangle.push(input[i].split(" ").map(Number));
}

// DP 테이블 생성 (각 층마다 크기가 다름)
const dp = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));

// 첫 번째 층 초기화
dp[0][0] = triangle[0][0];

// 두 번째 층부터 마지막 층까지
for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    // 왼쪽 끝: 위에서 j번째에서만 올 수 있음
    if (j === 0) {
      dp[i][j] = dp[i - 1][j] + triangle[i][j];
    }
    // 오른쪽 끝: 위에서 j-1번째에서만 올 수 있음
    else if (j === i) {
      dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
    }
    // 중간: 위에서 j-1 또는 j에서 올 수 있음 (큰 값 선택)
    else {
      dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }
}

// 마지막 층에서 최댓값 찾기
console.log(Math.max(...dp[n - 1]));
