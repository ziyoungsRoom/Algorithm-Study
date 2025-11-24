// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 61260 KB , 시간 : 396 ms

// 문제 : 모든 지점에서 다른 모든 지점까지의 최단 거리를 구하는 문제.
// BFS를 사용하여 최단 거리를 구한다.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const map = [];
let sx, sy;

// 입력 & 시작점 찾기
for (let i = 0; i < n; i++) {
  map[i] = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 2) {
      sx = i;
      sy = j;
    }
  }
}

// BFS
const dist = Array.from({ length: n }, () => Array(m).fill(-1));
const queue = [[sx, sy]];
dist[sx][sy] = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let idx = 0;

while (idx < queue.length) {
  const [x, y] = queue[idx++];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < m &&
      map[nx][ny] === 1 &&
      dist[nx][ny] === -1
    ) {
      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

// 출력
for (let i = 0; i < n; i++) {
  const row = [];
  for (let j = 0; j < m; j++) {
    row.push(map[i][j] === 0 ? 0 : dist[i][j]);
  }
  console.log(row.join(" "));
}
