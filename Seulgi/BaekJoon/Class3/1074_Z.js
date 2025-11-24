// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9612 KB , 시간 : 96 ms

// 문제 : 2차원 배열을 4분면으로 나누고, 주어진 좌표가 몇 번째 분면에 있는지 찾는 문제.
// 분할 정복을 사용하여 좌표를 찾는다.

const fs = require("fs");
const [N, r, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = 0;

// 분할 정복
function solve(n, row, col) {
  if (n === 0) return;

  const half = 2 ** (n - 1);
  const square = half * half; // 한 사분면 크기

  // 어느 사분면인지 확인
  if (row < half && col < half) {
    // 1사분면 (왼쪽 위)
    solve(n - 1, row, col);
  } else if (row < half && col >= half) {
    // 2사분면 (오른쪽 위)
    answer += square;
    solve(n - 1, row, col - half);
  } else if (row >= half && col < half) {
    // 3사분면 (왼쪽 아래)
    answer += square * 2;
    solve(n - 1, row - half, col);
  } else {
    // 4사분면 (오른쪽 아래)
    answer += square * 3;
    solve(n - 1, row - half, col - half);
  }
}

solve(N, r, c);
console.log(answer);
