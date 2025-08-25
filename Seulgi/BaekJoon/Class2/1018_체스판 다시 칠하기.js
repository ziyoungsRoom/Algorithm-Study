// 언어 : Javascript , (성공/실패) : 1/3 , 메모리 : 10232 KB , 시간 : 164 ms

// 문제 : 체스판은 8×8크기의 정사각형으로 잘라져 있고, 각 정사각형은 검정색 또는 흰색으로 칠해져 있고, 변을 공유하는 두 개의 사각형은 다른 색으로 칠해져 있다. 검정색과 흰색이 번갈아가면서 칠해져 있는 상태이다.

const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const [N, M] = lines[0].split(" ").map(Number);
const board = lines.slice(1);

let answer = Infinity;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let misW = 0;
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const expected = ((r + c) % 2 === 0) ? 'W' : 'B';
        if (board[i + r][j + c] !== expected) misW++;
      }
    }
    const misB = 64 - misW;
    const cost = Math.min(misW, misB);
    if (cost < answer) answer = cost;
  }
}

console.log(answer);