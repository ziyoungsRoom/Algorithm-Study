// 언어 : Javascript , (성공/실패) : 1/3 , 메모리 : 12412 KB , 시간 : 176 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
let line = 1;

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[line++].split(" ").map(Number);

  // 배추밭 초기화
  const field = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 0; i < K; i++) {
    const [x, y] = input[line++].split(" ").map(Number);
    // 배추 위치
    field[y][x] = 1;
  }

  let count = 0;

  const bfs = (sy, sx) => {
    const queue = [[sy, sx]];
    // 방문 표시
    field[sy][sx] = 0;

    while (queue.length) {
      const [y, x] = queue.shift();

      for (let d = 0; d < 4; d++) {
        const ny = y + dy[d];
        const nx = x + dx[d];

        if (ny >= 0 && ny < N && nx >= 0 && nx < M && field[ny][nx] === 1) {
          // 방문 표시
          field[ny][nx] = 0;
          queue.push([ny, nx]);
        }
      }
    }
  };

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (field[y][x] === 1) {
        bfs(y, x);
        count++;
      }
    }
  }

  console.log(count);
}
