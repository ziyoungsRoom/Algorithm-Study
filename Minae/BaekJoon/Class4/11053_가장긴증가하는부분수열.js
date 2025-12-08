// 언어: JavaScript, (성공/실패): (1/3), 메모리: 9,664 KB, 시간: 152 ms
const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

// 수열의 길이
const N = Number(input[0]);
// 수열
const A = input[1].split(' ').map(Number);

// dp[i] = i번째 원소로 끝나는 가장 긴 증가하는 부분 수열의 길이
// 어떤 원소든 자기 자신만으로 길이 1의 증가 수열을 만들 수 있으므로 초기값은 모두 1
const dp = Array(N).fill(1);

// i번째 원소를 마지막으로 하는 LIS 길이를 계산
for (let i = 0; i < N; i++) {
  // i 이전 모든 원소(j)를 확인하면서
  for (let j = 0; j < i; j++) {
    // 증가 수열의 조건: 앞의 값(A[j])이 현재 값(A[i])보다 작을 때만 연결 가능
    if (A[j] < A[i]) {
      // j에서 끝나는 LIS(dp[j])에 현재 A[i]를 붙이면 dp[j] + 1
      // 여러 j 중 가장 긴 길이를 dp[i]에 저장
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));
