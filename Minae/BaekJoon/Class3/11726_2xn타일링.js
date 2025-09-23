// 언어: JavaScript, (성공/실패): 2/2, 메모리: 9,644 KB, 시간: 148 ms
const n = parseInt(require("fs").readFileSync("/dev/stdin", "utf8").trim());

const dp = new Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[i]);
