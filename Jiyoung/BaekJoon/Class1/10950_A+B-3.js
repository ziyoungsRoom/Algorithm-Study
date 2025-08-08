// 언어 : Javascript , (성공/실패) : 1/6 , 메모리 : 9596 KB , 시간 : 100 ms

// 입력값을 줄바꿈 기준으로 분리
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let [A, B] = input[i].split(" ").map(Number);
  console.log(A + B);
}
