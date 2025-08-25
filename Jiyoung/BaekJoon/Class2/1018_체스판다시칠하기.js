// 언어 : Javascript , (성공/실패) : 1/10 , 메모리 : 10132 KB , 시간 : 160 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split(""));

function countRepaint(x, y) {
  // countW = White 체스판일 경우 다시 칠해야하는 판의 수
  // countB = Black 체스판일 경우 다시 칠해야하는 판의 수
  let countW = 0;
  let countB = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const current = board[x + i][y + j];
      // 짝수번째 판일 경우 : 시작 컬러와 동일
      if ((i + j) % 2 === 0) {
        if (current !== "W") countW++;
        if (current !== "B") countB++;
        // 홀수번째 판일 경우 : 시작 컬러와 상이
      } else {
        if (current !== "B") countW++;
        if (current !== "W") countB++;
      }
    }
  }

  return Math.min(countW, countB);
}

let result = Infinity;
// 시작 인덱스 기준으로 돌면서 최소값을 가지는 결과 도출
for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    result = Math.min(result, countRepaint(i, j));
  }
}

console.log(result);
