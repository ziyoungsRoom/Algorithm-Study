// 언어: JavaScript, (성공/실패): 1/0, 메모리: 10,524 KB, 시간: 152 ms
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

// 종이 한 변의 길이 N
const N = parseInt(input[0]);
// 종이 데이터(0: 흰색, 1: 파란색)
const paper = [];
for (let i = 0; i < N; i++) {
  paper.push(input[i].split(" ").map(Number));
}

// 잘라낸 횐색 종이 개수
let whiteCount = 0;
// 잘라낸 파란색 종이 개수
let blueCount = 0;

// 특정 영역이 모두 같은 색인지 확인하는 함수
function isSameColor(x, y, size) {
  // 기준 색(첫 칸)
  const color = paper[x][y];

  // 해당 영역 전체를 돌면서 같은 색인지 확인
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      // 다른 색이 있으면 false
      if (paper[i][j] !== color) {
        return false;
      }
    }
  }
  // 전부 같은 색이면 true
  return true;
}

// 분할 정복으로 종이 자르기
function divide(x, y, size) {
  // 현재 영역이 전부 같은 색이면 카운트 증가
  if (isSameColor(x, y, size)) {
    if (paper[x][y] === 0) {
      whiteCount++; // 흰색 종이
    } else {
      blueCount++; // 파란색 종이
    }
  } else {
    // 색이 섞여 있다면 4등분으로 나눠서 재귀 호출
    divide(x, y, size / 2); // 왼쪽 위
    divide(x, y + size / 2, size / 2); // 오른쪽 위
    divide(x + size / 2, y, size / 2); // 왼쪽 아래
    divide(x + size / 2, y + size / 2, size / 2); // 오른쪽 아래
  }
}

// 처음에는 전체 종이(NxN)를 검사 시작
divide(0, 0, N);
console.log(whiteCount);
console.log(blueCount);
