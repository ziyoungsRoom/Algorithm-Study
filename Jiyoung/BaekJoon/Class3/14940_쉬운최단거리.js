// 언어 : Javascript , (성공/실패) : 2/3 , 메모리 : 34220 KB , 시간 : 312 ms

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1).map((line) => line.split(' ').map(Number));
let destination;

grid.forEach((row, rowIdx) => {
  const colIdx = row.findIndex((num) => num === 2);
  if (colIdx !== -1) {
    destination = [rowIdx, colIdx];
  }
});

const BFS = (start) => {
  const [x, y] = start;
  grid[x][y] = 0;

  const queue = [start];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[x][y] = true;

  while (queue.length > 0) {
    const [currX, currY] = queue.shift();
    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    directions.forEach(([dx, dy]) => {
      const [nextX, nextY] = [currX + dx, currY + dy];

      if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m) {
        if (!visited[nextX][nextY] && grid[nextX][nextY] === 1) {
          visited[nextX][nextY] = true;
          grid[nextX][nextY] = grid[currX][currY] + 1;

          queue.push([nextX, nextY]);
        }
      }
    });
  }

  visited.forEach((row, rowIdx) => {
    row.forEach((_, colIdx) => {
      if (grid[rowIdx][colIdx] === 1 && !visited[rowIdx][colIdx]) {
        grid[rowIdx][colIdx] = -1;
      }
    });
  });

  return grid;
};

console.log(
  BFS(destination)
    .map((row) => row.join(' '))
    .join('\n')
);
