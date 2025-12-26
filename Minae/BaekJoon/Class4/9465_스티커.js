// 언어: JavaScript, (성공/실패): (1/1), 메모리: 98,656 KB, 시간: 492 ms
const input = require('fs').readFileSync('/stdin', 'utf8').trim().split('\n');
// 테스트케이스 개수
const testCase = parseInt(input[0]);
// 현재 읽고 있는 줄 번호
let line = 1;

// 테스트케이스 반복
for (let i = 0; i < testCase; i++) {
  // 스티커 열의 개수 n
  const n = parseInt(input[line]);
  // 위쪽 스티커 점수 배열
  const top = input[line + 1].split(' ').map(Number);
  // 아래쪽 스티커 점수 배열
  const bottom = input[line + 2].split(' ').map(Number);

  // DP 배열 선언
  // j열에서 아무 스티커도 고르지 않았을 때의 최대 점수
  let dp0 = [];
  // j열에서 위 스티커를 고른 경우의 최대 점수
  let dp1 = [];
  // j열에서 아래 스티커를 고른 경우의 최대 점수
  let dp2 = [];

  // 초기값(0번째 열)
  dp0[0] = 0;
  dp1[0] = top[0];
  dp2[0] = bottom[0];

  // 1번째 열부터 n-1번째 열까지 DP 진행
  for (let j = 1; j < n; j++) {
    // 현재 열에서 아무것도 고르지 않는 경우
    // 이전 열에서 어떤 상태였든 상관없이 최대값 선택
    dp0[j] = Math.max(dp0[j - 1], dp1[j - 1], dp2[j - 1]);
    // 현재 열에서 위 스티커를 고르는 경우
    // 이전 열에서는 위를 고를 수 없으므로 dp0, dp2만 가능
    dp1[j] = Math.max(dp0[j - 1], dp2[j - 1]) + top[j];
    // //현재 열에서 아래 스티커를 고르는 경우
    // 이전 열에서는 아래를 고를 수 없으므로 dp0, dp1만 가능
    dp2[j] = Math.max(dp0[j - 1], dp1[j - 1]) + bottom[j];
  }
  // 마지막 열에서의 세 가지 상태 중 최대값이 정답
  console.log(Math.max(dp0[n - 1], dp1[n - 1], dp2[n - 1]));

  // 다음 테스트케이스로 이동
  line += 3;
}
