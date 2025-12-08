// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9664 KB , 시간 : 152 ms

// 문제 : 가장 긴 증가하는 부분 수열(LIS)의 길이 구하기
// DP: dp[i] = i번째까지 최장 길이

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// dp[i] = i에서 끝나는 LIS 길이
const dp = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    // j < i이고 값이 작으면 갱신
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));
