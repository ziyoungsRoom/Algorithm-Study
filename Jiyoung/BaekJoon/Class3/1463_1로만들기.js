// 언어 : Javascript , (성공/실패) : 1/3 , 메모리 : 17444 KB , 시간 : 164 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const N = +input[0];
let dp = Array(N + 1).fill(0);

dp[1] = 0;

for (let i = 2; i <= N; i++) {
  // N-1 : 모든 수가 가능한 경우의 수
  dp[i] = dp[i - 1] + 1;

  // N/2 : N이 2의 배수일 때. N/3 : Ndl 3의 배수일 때
  // Math.min()을 통해 3가지 경우의 수 중 최솟값을 dp[i]에 할당.
  if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
}

console.log(dp[N]);
