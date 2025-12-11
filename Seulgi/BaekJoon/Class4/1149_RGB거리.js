// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9748 KB , 시간 : 96 ms

// 문제: N개 집을 R,G,B로 칠할 때 인접한 집은 다른 색, 최소 비용 구하기
// 핵심: dp[i][color] = i번째 집을 color로 칠할 때까지의 누적 최소 비용

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]); // 집의 개수

// dp[i][j] = i번째 집을 j색으로 칠할 때까지의 최소 비용
// j: 0=R, 1=G, 2=B
const dp = Array.from({ length: N }, () => [0, 0, 0]);

// 첫 번째 집 초기화
const firstHouse = input[1].split(" ").map(Number);
dp[0][0] = firstHouse[0]; // R
dp[0][1] = firstHouse[1]; // G
dp[0][2] = firstHouse[2]; // B

// 두 번째 집부터 마지막 집까지
for (let i = 1; i < N; i++) {
  const [R, G, B] = input[i + 1].split(" ").map(Number);

  // 현재 집을 R로 칠할 때: 이전 집은 G 또는 B
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + R;

  // 현재 집을 G로 칠할 때: 이전 집은 R 또는 B
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + G;

  // 현재 집을 B로 칠할 때: 이전 집은 R 또는 G
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + B;
}

// 마지막 집의 R, G, B 중 최솟값
console.log(Math.min(dp[N - 1][0], dp[N - 1][1], dp[N - 1][2]));
