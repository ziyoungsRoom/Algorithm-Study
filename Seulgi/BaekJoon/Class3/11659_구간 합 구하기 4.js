// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 49460 KB , 시간 : 324 ms
// 문제 : 수 N개가 주어졌을 때, i번째 수부터 j번째 수까지 합을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = [0, ...input[1].split(" ").map(Number)]; // 인덱스 1부터 사용

// 누적 합 계산 (인덱스 1부터)
for (let i = 1; i <= N; i++) {
  arr[i] += arr[i - 1];
}

// 쿼리 처리 및 출력
const result = [];
for (let k = 0; k < M; k++) {
  const [i, j] = input[k + 2].split(" ").map(Number);
  result.push(arr[j] - arr[i - 1]);
}

console.log(result.join("\n"));
