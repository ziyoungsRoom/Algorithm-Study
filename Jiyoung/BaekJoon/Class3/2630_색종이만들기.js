// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 10500 KB , 시간 : 748 ms

const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');

const N = Number(input[0]);
const board = Array.from({ length: N }, (_, i) =>
  input[i + 1].trim().split(' ').map(Number)
);

let white = 0;
let blue = 0;

// isUniform : 주어진 영역이 단색인지 확인하고 색 또는 혼합 반환
const isUniform = (x, y, size) => {
  const first = board[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (board[i][j] !== first) return -1;
    }
  }
  return first;
};

// divide : 영역을 단색이면 카운트, 혼합이면 4등분하여 나누는 재귀 함수
const divide = (x, y, size) => {
  const u = isUniform(x, y, size);
  if (u === 0) {
    white++;
    return;
  }
  if (u === 1) {
    blue++;
    return;
  }

  const half = size >> 1;
  divide(x, y, half);
  divide(x, y + half, half);
  divide(x + half, y, half);
  divide(x + half, y + half, half);
};

divide(0, 0, N);
console.log(white + '\n' + blue);
