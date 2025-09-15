// 언어 : Javascript , (성공/실패) : 1/2 , 메모리 : 9324 KB , 시간 : 88 ms
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const numbers = input.map(Number);
const dp = [0];

// 초기값 Setting - 조건이 1개 이상의 1, 2, 3 합이기 때문에 자기자신도 포함.
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

const max_num = Math.max(...numbers);

// 테스트 케이스 중 가장 큰 수까지 범위 설정하여 필요한 값으로만 배열을 구성.
for (let i = 4; i <= max_num; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

const result = numbers.map((num) => dp[num]);

console.log(result.join("\n"));
