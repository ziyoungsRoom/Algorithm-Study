// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 10244 KB , 시간 : 152 ms

// 문제 : N×N 크기의 종이가 하얀색(0)과 파란색(1)으로 칠해져 있다.
// 같은 색이 아니면 4등분으로 자르는 과정을 반복한다.
// 최종적으로 만들어진 하얀색과 파란색 색종이의 개수를 구한다.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const paper = [];

for (let i = 1; i <= N; i++) {
  paper.push(input[i].split(" ").map(Number));
}

let whiteCount = 0;
let blueCount = 0;

// 분할 정복 함수
function divide(x, y, size) {
  // 현재 영역이 모두 같은 색인지 확인
  const color = paper[y][x];
  let same = true;

  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (paper[i][j] !== color) {
        same = false;
        break;
      }
    }
    if (!same) break;
  }

  // 모두 같은 색이면 카운트 증가
  if (same) {
    if (color === 0) whiteCount++;
    else blueCount++;
    return;
  }

  // 다른 색이 있으면 4등분
  const half = size / 2;
  divide(x, y, half); // 좌상
  divide(x + half, y, half); // 우상
  divide(x, y + half, half); // 좌하
  divide(x + half, y + half, half); // 우하
}

divide(0, 0, N);

console.log(whiteCount);
console.log(blueCount);
