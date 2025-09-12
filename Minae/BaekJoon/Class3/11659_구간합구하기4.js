// 언어: JavaScript, (성공/실패): 1/0, 메모리: 41,720 KB, 시간: 3,888 ms
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arrayN = input[1].split(" ").map(Number);

// 누적 합 배열 초기화
const prefixSum = new Array(N + 1).fill(0);

// 누적 합 배열 계산
// prefixSum[0] = 0 (기본값)
// prefixSum[1] = arrayN[0]
// prefixSum[2] = arrayN[0] + arrayN[1] ......
for (let i = 1; i <= N; i++) {
  prefixSum[i] = prefixSum[i - 1] + arrayN[i - 1];
}

// M개의 쿼리를 처리
// 각 쿼리는 구간 [i, j]의 합을 구하는 것
for (let k = 2; k <= M + 1; k++) {
  // k번째 줄(2번째 줄부터)에서 구간의 시작점 i와 끝점 j를 추출
  const [i, j] = input[k].split(" ").map(Number);

  // 구간[i, j]의 합 계산
  const result = prefixSum[j] - prefixSum[i - 1];
  console.log(result);
}
