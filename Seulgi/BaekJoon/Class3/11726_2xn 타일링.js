// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9648 KB , 시간 : 152 ms

// 문제 : 2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);

// DP 테이블 생성
// dp[i] = 2×i 크기의 직사각형을 채우는 방법의 수
const dp = new Array(n + 1).fill(0);

// 초기값 설정
dp[0] = 1; // 편의상 1로 설정 (점화식 계산을 위해)
dp[1] = 1; // 2×1 직사각형은 2×1 타일 1개로만 채울 수 있음

// 점화식: dp[i] = dp[i-1] + dp[i-2]
// 이유: 맨 끝에 세로 타일 1개 놓기(dp[i-1]) + 가로 타일 2개 놓기(dp[i-2])
for (let i = 2; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[n]);
