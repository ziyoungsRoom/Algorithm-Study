// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 157572 KB , 시간 : 664 ms

// 문제 : 토마토가 모두 익는 최소 일수 구하기
// 익은 토마토에서 동시에 시작하여 퍼져나감

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const box = [];
const queue = [];
let unripe = 0; // 안 익은 토마토 개수

// 입력 처리 & 초기 익은 토마토 찾기
for (let i = 0; i < N; i++) {
  box[i] = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 1) {
      queue.push([i, j, 0]); // 익은 토마토 위치와 일수
    } else if (box[i][j] === 0) {
      unripe++; // 안 익은 토마토 카운트
    }
  }
}

// 이미 모두 익어있으면
if (unripe === 0) {
  console.log(0);
  return;
}

// BFS
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let idx = 0;
let maxDay = 0;

while (idx < queue.length) {
  const [x, y, day] = queue[idx++];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && box[nx][ny] === 0) {
      box[nx][ny] = 1; // 익음 처리
      queue.push([nx, ny, day + 1]);
      unripe--;
      maxDay = day + 1;
    }
  }
}

// 모두 익었는지 확인
console.log(unripe === 0 ? maxDay : -1);
