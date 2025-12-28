// 언어: JavaScript, (성공/실패): 1/0, 메모리: 101,296 KB, 시간: 572 ms

const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

// N: 표의 크기, M: 문제 개수
const [N, M] = input[0].split(' ').map(Number);
// 표의 원본 값 저장
// N + 1크기로 만드는 이유: 1-based 인덱스를 사용하고, 누적합 계산 시 경계 처리를 쉽게 하기 위해
const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
// (1,1)~(i,j)까지의 누적합 저장
const prefixSumDp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

// 표 원본 입력 처리
for (let i = 1; i <= N; i++) {
  const row = input[i].split(' ').map(Number);
  for (let j = 1; j <= N; j++) {
    graph[i][j] = row[j - 1];
  }
}

// 누적합 배열 생성
// 점화식: dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1] + graph[i][j]
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    prefixSumDp[i][j] =
      prefixSumDp[i - 1][j] + // 위쪽 영역 누적합
      prefixSumDp[i][j - 1] - // 왼쪽 영역 누적합
      prefixSumDp[i - 1][j - 1] + // 중복으로 더해진 좌상단 영역 제거
      graph[i][j]; // 현재 칸의 값 추가
  }
}

let result = [];
// 문제 입력 시작 위치(N+1번째 줄부터 쿼리 시작)
let idx = N + 1;

// M개의 쿼리 처리
for (let k = 0; k < M; k++) {
  const [x1, y1, x2, y2] = input[idx++].split(' ').map(Number);

  // 구간합 계산 공식:
  // (1, 1) ~ (x2, y2) 전체에서
  // (1, 1) ~ (x1-1, y2) 윗부분 빼고
  // (1, 1) ~ (x2, y1-1) 왼쪽부분 빼고
  // (1, 1) ~ (x1-1, y1-1) 중복으로 뺀 좌상단 부분 다시 더하기
  const sum =
    prefixSumDp[x2][y2] -
    prefixSumDp[x1 - 1][y2] -
    prefixSumDp[x2][y1 - 1] +
    prefixSumDp[x1 - 1][y1 - 1];

  result.push(sum);
}

console.log(result.join('\n'));
