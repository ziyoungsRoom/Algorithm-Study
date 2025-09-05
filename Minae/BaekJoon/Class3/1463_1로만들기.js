// 언어: JavaScript, (성공/실패): 1/0, 메모리: 17,432 KB, 시간: 168 ms

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

const N = parseInt(input);

// dp[i] = 숫자 i를 1로 만드는 데 필요한 최소 연산 횟수
// 크기가 N+1인 배열을 준비(인덱스 1부터 사용)
const dp = new Array(N + 1);
// 1은 이미 1이므로 연산 횟수는 0
dp[1] = 0;

// 2부터 N까지 반복하면서 최소 연산 횟수를 채움
for (let i = 2; i <= N; i++) {
  dp[i] = Math.min(
    // 1을 빼는 경우
    dp[i - 1] + 1,
    // 2로 나누어 떨어지면 2로 나누는 경우
    i % 2 === 0 ? dp[i / 2] + 1 : Infinity,
    // 3으로 나누어 떨어지면 3으로 나누는 경우
    i % 3 === 0 ? dp[i / 3] + 1 : Infinity
  );
}

console.log(dp[N]);
