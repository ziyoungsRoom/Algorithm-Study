// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9676 KB , 시간 : 100 ms
// 문제 : 정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.
// 1. X가 3으로 나누어 떨어지면, 3으로 나눈다.
// 2. X가 2로 나누어 떨어지면, 2로 나눈다.
// 3. 1을 뺀다.
// 정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.

const fs = require("fs");
const N = +fs.readFileSync(0, "utf8").trim();

// dp[i] = i를 1로 만드는 최소 연산 횟수
const dp = new Array(N + 1);
dp[1] = 0;

for (let i = 2; i <= N; i++) {
  // 1 빼기 (항상 가능)
  dp[i] = dp[i - 1] + 1;

  // 2로 나누어떨어지면 비교
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  // 3으로 나누어떨어지면 비교
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(dp[N]);
