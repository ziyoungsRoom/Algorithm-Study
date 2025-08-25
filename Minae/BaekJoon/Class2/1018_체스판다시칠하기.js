// 언어: JavaScript, (성공/실패): 1/0, 메모리: 10,080 KB, 시간: 164 ms
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1);

function countRepaints(board, startRow, startCol) {
  let patternW = 0;
  let patternB = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let currentColor = board[startRow + i][startCol + j];

      let shouldBeW;
      if ((i + j) % 2 === 0) {
        shouldBeW = "W";
      } else {
        shouldBeW = "B";
      }

      let shouldBeB;
      if ((i + j) % 2 === 0) {
        shouldBeB = "B";
      } else {
        shouldBeB = "W";
      }

      if (currentColor !== shouldBeW) {
        patternW++;
      }
      if (currentColor !== shouldBeB) {
        patternB++;
      }
    }
  }

  return Math.min(patternW, patternB);
}

let minRepaints = 64;

for (let startRow = 0; startRow <= N - 8; startRow++) {
  for (let startCol = 0; startCol <= M - 8; startCol++) {
    let repaints = countRepaints(board, startRow, startCol);
    minRepaints = Math.min(minRepaints, repaints);
  }
}

console.log(minRepaints);
