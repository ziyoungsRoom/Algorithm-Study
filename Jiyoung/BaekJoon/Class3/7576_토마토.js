// 언어 : Javascript , (성공/실패) : 4/1 , 메모리 : 157332 KB , 시간 : 772 ms

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

const [M, N] = input[0];
const box = input.slice(1);
const startPoints = [];

// zeroCount: 익지 않은 토마토 개수
let zeroCount = 0;
let result = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 1) startPoints.push([i, j]);
    else if (box[i][j] === 0) {
      zeroCount++;
      // 익지 않은 토마토가 있을 경우, result를 -1로 초기화
      if (result !== -1) result = -1;
    }
  }
}

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const BFS = (startPoints) => {
  const queue = [...startPoints];
  let head = 0;
  let days = 0;

  while (queue.length > head) {
    // size : 오늘 익을 토마토의 개수
    const size = queue.length - head;
    days++;

    for (let i = 0; i < size; i++) {
      const [x, y] = queue[head];
      head++;

      directions.forEach(([dx, dy]) => {
        const [nextX, nextY] = [x + dx, y + dy];

        if (nextX >= 0 && nextX < N && nextY >= 0 && nextY < M) {
          if (box[nextX][nextY] === 0) {
            box[nextX][nextY] = 1;
            zeroCount--;
            queue.push([nextX, nextY]);
          }
        }
      });
    }
  }

  // 익지 않은 토마토가 남아있으면 -1 반환
  return zeroCount === 0 ? days - 1 : -1;
};

// 익지 않은 토마토가 있었을 경우에만 BFS 실행
if (result === -1) {
  const days = BFS(startPoints);
  result = days;
}

console.log(result);
