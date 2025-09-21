// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 12216 KB , 시간 : 156 ms

// 문제 : 차세대 영농인 한나는 강원도 고랭지에서 유기농 배추를 재배하기 위해 나누어진 배추밭에 배추를 구입하려고 한다.
// 배추밭은 고정된 밭에 좌우로 넓은 밭이 있고, 전체 밭은 마당 뒤쪽에 있는 농장의 뒤쪽 계단으로 들어가는 통로가 있다.
// 농장 내 배추밭은 배추밭이 주변 지면과 일차선으로 구분되어 있으며, 배추들이 모여있는 곳에 배추가 있으며, 배추들의 개수는 최대 50개이다.
// 한나에게 배추를 재배하기 위해 필요한 최소의 배추흰지렁이 마리 수를 구하는 프로그램을 작성하라.
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const T = Number(input[idx++]);

// DFS로 연결된 배추 찾기
function dfs(field, x, y, N, M) {
  if (x < 0 || x >= N || y < 0 || y >= M || field[x][y] === 0) return;

  field[x][y] = 0; // 방문 처리 (0으로 바꿔버림)

  // 상하좌우 탐색
  dfs(field, x - 1, y, N, M);
  dfs(field, x + 1, y, N, M);
  dfs(field, x, y - 1, N, M);
  dfs(field, x, y + 1, N, M);
}

// 각 테스트 케이스
for (let t = 0; t < T; t++) {
  const [M, N, K] = input[idx++].split(" ").map(Number);

  // 배추밭 만들기
  const field = Array.from({ length: N }, () => Array(M).fill(0));

  // 배추 심기
  for (let i = 0; i < K; i++) {
    const [X, Y] = input[idx++].split(" ").map(Number);
    field[Y][X] = 1;
  }

  // 배추 덩어리 세기
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (field[i][j] === 1) {
        dfs(field, i, j, N, M);
        count++;
      }
    }
  }

  console.log(count);
}
