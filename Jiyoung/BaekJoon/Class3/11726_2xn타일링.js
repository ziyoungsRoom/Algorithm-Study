// 언어 : Javascript , (성공/실패) : 1/5 , 메모리 : 9648 KB , 시간 : 148 ms
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);
const dp = new Array(n + 1).fill(1);

// 초기값 설정
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  // 모듈러[%] 처리 타이밍 : 큰 수 연산에서의 불안정성 때문에 중간에 처리해주는 게 안정적
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[n]);
