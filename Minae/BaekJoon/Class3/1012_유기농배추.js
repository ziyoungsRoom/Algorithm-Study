// 언어: JavaScript, (성공/실패): 1/0, 메모리: 12,729 KB, 시간: 160 ms
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 테스트 케이스 개수
const T = parseInt(input[0]);
// 입력 배열에서 현재 읽을 줄 번호
// input[0]은 테스트케이스 개수이므로 input[1]부터 처리
let index = 1;

for (let t = 0; t < T; t++) {
  // M: 가로 길이, N: 세로 길이, K: 배추 개수
  const [M, N, K] = input[index++].split(" ").map(Number);

  // 배추밭 정보(N행 x M열), 기본값 0으로 초기화
  const field = Array(N)
    .fill()
    .map(() => Array(M).fill(0));

  // 배추 위치 표시(배추가 있는 칸 = 1)
  for (let i = 0; i < K; i++) {
    const [x, y] = input[index++].split(" ").map(Number);
    // 좌표(x, y)에 배추 심기
    field[y][x] = 1;
  }

  // 방문 여부 체크 배열
  const visited = Array(N)
    .fill()
    .map(() => Array(M).fill(false));

  // 상, 하, 좌, 우 이동을 표현하기 위한 방향 벡터
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  // 깊이 우선 탐색(DFS) 함수
  function dfs(x, y) {
    // 현재 위치 방문 처리
    visited[y][x] = true;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i]; // 다음 x 좌표
      const ny = y + dy[i]; // 다음 y 좌표

      // 다음 좌표(nx, ny)가 밭의 범위 안에 있는지 확인
      if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
        // 그 칸에 배추가 있고, 아직 방문하지 않았다면 탐색 계속
        if (field[ny][nx] === 1 && !visited[ny][nx]) {
          dfs(nx, ny);
        }
      }
    }
  }

  // 필요한 지렁이 수 = 배추 그룹 수
  let count = 0;
  // 밭의 모든 칸을 확인
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 배추가 있고 아직 방문하지 않았다면 -> 새로운 구역 시작
      if (field[i][j] === 1 && !visited[i][j]) {
        // DFS로 연결된 배추들은 모두 방문 처리
        dfs(j, i);
        // 구역 하나 발견 -> 지렁이 한 마리 추가
        count++;
      }
    }
  }
  console.log(count);
}
