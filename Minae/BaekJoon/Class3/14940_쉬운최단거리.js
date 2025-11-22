// 언어: JavaScript, (성공/실패): 1/0, 메모리: 32,964 KB, 시간: 332 ms
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

// 지도 배열과 시작점 좌표를 저장할 변수
const map = [];
let startX;
let startY;

for (let i = 0; i < n; i++) {
  // i 번째 줄을 읽어서 숫자 배열로 변환
  const row = input[i + 1].split(' ').map(Number);
  // 변환한 행을 지도 배열에 추가
  map.push(row);

  // i 번째 줄에서 j번 열을 순회한다
  for (let j = 0; j < m; j++) {
    // 값이 2인 경우(시작 지점)
    if (row[j] === 2) {
      // 시작 지점 좌표 저장
      startX = i;
      startY = j;
    }
  }
}

// 거리 정보를 저장할 배열 생성(초기값 전부 -1)
const distance = Array(n)
  .fill(0)
  .map(() => Array(m).fill(-1));
// 상하좌우 x 이동 좌표 변화량
const dx = [-1, 1, 0, 0];
// 상하좌우 y 이동 좌표 변화량
const dy = [0, 0, -1, 1];
// BFS(너비 우선 탐색)에 사용할 큐
const queue = [];
// 시작지점을 큐에 넣음
queue.push([startX, startY]);
// 시작지점의 거리는 0으로 설정
distance[startX][startY] = 0;

// 큐가 빌 때까지 BFS 반복
while (queue.length > 0) {
  // 현재 탐색할 위치를 꺼냄
  const [x, y] = queue.shift();

  // 4방향 탐색
  for (let i = 0; i < 4; i++) {
    // 다음 이동할 좌표
    const nx = x + dx[i];
    const ny = y + dy[i];
    // 현재 위치에서 한 칸 이동했으므로 거리 +1
    const nextDist = distance[x][y] + 1;

    if (
      // 범위 체크
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < m &&
      // 갈 수 있는 땅(1)인 경우에만 이동
      map[nx][ny] === 1 &&
      // 아직 방문하지 않은 위치여야 함
      distance[nx][ny] === -1
    ) {
      // 거리 기록
      distance[nx][ny] = nextDist;
      // 규에 다음 위치 추가
      queue.push([nx, ny]);
    }
  }
}

for (let i = 0; i < n; i++) {
  // 출력용 배열 선언
  const result = [];
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 0) {
      result.push(0);
      // 원래 0인 곳은 그대로 0 출력
    } else if (distance[i][j] === -1) {
      result.push(-1);
      // 갈 수 없는 곳(or 도달 불가)은 -1 출력
    } else {
      result.push(distance[i][j]);
      // 그 외에는 거리 출력
    }
  }
  console.log(result.join(' '));
}
