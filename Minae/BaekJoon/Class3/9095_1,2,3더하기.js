// 언어: JavaScript, (성공/실패): 2/0, 메모리: 9,356 KB, 시간: 92 ms
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const T = parseInt(input[0]);
const testCase = input.slice(1).map(Number);

// dp 배열 생성
const dp = new Array(12);
// 초기값 설정
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

// 점화식: dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
// - 마지막 숫자가 1이면, 앞에 남은 합은 i-1 → 경우의 수 = dp[i-1]
// - 마지막 숫자가 2이면, 앞에 남은 합은 i-2 → 경우의 수 = dp[i-2]
// - 마지막 숫자가 3이면, 앞에 남은 합은 i-3 → 경우의 수 = dp[i-3]
// 세 경우를 모두 더하면 dp[i]
for (let i = 4; i < 12; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < T; i++) {
  console.log(dp[testCase[i]]);
}
