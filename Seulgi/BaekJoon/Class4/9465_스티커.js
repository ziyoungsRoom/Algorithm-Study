// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 70008 KB , 시간 : 432 ms

// 문제: 2행 n열 스티커, 인접(상하좌우) 선택 불가, 점수 합 최대
// 핵심: dp[행][열] = 현재 스티커 + max(대각선, 2칸 전 대각선)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
  const n = Number(input[line++]);
  const sticker = [
    input[line++].split(" ").map(Number), // 위쪽 행
    input[line++].split(" ").map(Number), // 아래쪽 행
  ];

  // n=1일 때 예외 처리
  if (n === 1) {
    console.log(Math.max(sticker[0][0], sticker[1][0]));
    continue;
  }

  // dp[0][i] = i번째 열 위쪽 선택 시 최댓값
  // dp[1][i] = i번째 열 아래쪽 선택 시 최댓값
  const dp = Array.from({ length: 2 }, () => Array(n).fill(0));

  // 0열 초기화
  dp[0][0] = sticker[0][0];
  dp[1][0] = sticker[1][0];

  // 1열 초기화 (0열에서 대각선만 가능)
  dp[0][1] = sticker[0][1] + dp[1][0];
  dp[1][1] = sticker[1][1] + dp[0][0];

  // 2열부터 n-1열까지
  for (let i = 2; i < n; i++) {
    // 위쪽 선택: 이전 열 아래 또는 2칸 전 아래 중 최대
    dp[0][i] = sticker[0][i] + Math.max(dp[1][i - 1], dp[1][i - 2]);

    // 아래쪽 선택: 이전 열 위 또는 2칸 전 위 중 최대
    dp[1][i] = sticker[1][i] + Math.max(dp[0][i - 1], dp[0][i - 2]);
  }

  // 마지막 열의 위 또는 아래 중 최댓값
  console.log(Math.max(dp[0][n - 1], dp[1][n - 1]));
}
