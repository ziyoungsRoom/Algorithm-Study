// 언어 : Javascript , (성공/실패) : 1/3 , 메모리 : 9668 KB , 시간 : 156 ms
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const N = +input[0];
const nums = input[1].split(' ').map(Number);

// dp 배열 : 최솟값이자 자기자신만 카운트한 값인 1로 초기화
let dp = Array(N).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    // nums[i] 값보다 작은 수 중 dp 배열의 값이 가장 큰 수를 채택하여 dp +1 추가
    if (nums[j] < nums[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

const result = Math.max(...dp);

console.log(result);
