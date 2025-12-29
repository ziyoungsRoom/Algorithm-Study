// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 101376 KB , 시간 : 556 ms

// 문제: N×N 표에서 직사각형 영역 합을 M번 구하기
// 핵심: 2차원 누적 합으로 전처리 후 O(1)에 각 쿼리 처리

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

// 1-indexed 배열 (계산 편의)
const arr = Array(N + 1)
  .fill(0)
  .map(() => Array(N + 1).fill(0));
const sum = Array(N + 1)
  .fill(0)
  .map(() => Array(N + 1).fill(0));

// 원본 배열 입력 (1-indexed로 저장)
for (let i = 1; i <= N; i++) {
  const row = input[i].split(" ").map(Number);
  for (let j = 1; j <= N; j++) {
    arr[i][j] = row[j - 1];
  }
}

// 2차원 누적 합 계산
// sum[i][j] = (1,1)부터 (i,j)까지의 모든 원소 합
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    sum[i][j] =
      arr[i][j] + // 현재 값
      sum[i - 1][j] + // 위쪽 누적 합
      sum[i][j - 1] - // 왼쪽 누적 합
      sum[i - 1][j - 1]; // 중복 제거
  }
}

// M개의 쿼리 처리
const result = [];
for (let i = 0; i < M; i++) {
  const [x1, y1, x2, y2] = input[N + 1 + i].split(" ").map(Number);

  // 구간 합 계산: 큰 사각형 - 위쪽 - 왼쪽 + 중복
  const answer =
    sum[x2][y2] - // 전체
    sum[x1 - 1][y2] - // 위쪽 제거
    sum[x2][y1 - 1] + // 왼쪽 제거
    sum[x1 - 1][y1 - 1]; // 중복 복구

  result.push(answer);
}

console.log(result.join("\n"));
