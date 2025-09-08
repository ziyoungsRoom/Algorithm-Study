// 언어: JavaScript, (성공/실패): 1/2, 메모리: 9,752 KB, 시간 96 ms

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 테스트 케이스 개수
const T = parseInt(input[0]);
// 각 테스트 케이스의 N값들을 숫자로 변환
const testCase = input.slice(1).map(Number);

// 다이나믹 프로그래밍을 위한 배열 선언(0부터 40까지 저정하기 위해 크기 41)
let count0 = new Array(41);
let count1 = new Array(41);

// 초기값 설정
count0[0] = 1;
count0[1] = 0;
count1[0] = 0;
count1[1] = 1;

// 2부터 40까지의 모든 값을 미리 계산해서 저장
for (let i = 2; i <= 40; i++) {
  count0[i] = count0[i - 1] + count0[i - 2];
  count1[i] = count1[i - 1] + count1[i - 2];
}

// 각 테스트 케이스에 대해 미리 계산된 결과를 출력
for (let i = 0; i < T; i++) {
  const n = testCase[i];
  console.log(count0[n] + " " + count1[n]);
}
