// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9872 KB , 시간 : 100 ms

// 문제 : 주어진 재귀 fibonacci 함수에서 fibonacci(N)을 호출했을 때, 0과 1이 각각 몇 번 출력되는지 구하는 문제.
// 입력: T (테스트 케이스), 각 줄마다 N (0 ≤ N ≤ 40)
// 출력: 각 N에 대해 0의 출력횟수와 1의 출력횟수를 공백으로 구분해서 출력

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const T = +input[0];

// 0과 1이 몇 번 출력되는지 저장하는 배열
let count0 = [1, 0]; // [n=0일때, n=1일때]
let count1 = [0, 1]; // [n=0일때, n=1일때]

// n=2부터 n=40까지 패턴으로 계산
for (let i = 2; i <= 40; i++) {
  count0[i] = count0[i - 1] + count0[i - 2];
  count1[i] = count1[i - 1] + count1[i - 2];
}

// 테스트 케이스마다 답 출력
for (let i = 1; i <= T; i++) {
  const n = +input[i];
  console.log(count0[n], count1[n]);
}
