// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9340 KB , 시간 : 100 ms

// 문제 : 정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 7가지가 있다. 합을 나타낼 때는 수를 1개 이상 사용해야 한다.
// 1+1+1+1
// 1+1+2
// 1+2+1
// 2+1+1
// 2+2
// 1+3
// 3+1
// 정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

// DP 배열 만들고 초기값 설정
const dp = [0, 1, 2, 4]; // dp[0]=0, dp[1]=1, dp[2]=2, dp[3]=4

// dp[4]부터 dp[10]까지 계산
for (let i = 4; i <= 10; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

// 첫 줄은 테스트 케이스 개수니까 1부터 시작
for (let i = 1; i <= input[0]; i++) {
  console.log(dp[input[i]]);
}
