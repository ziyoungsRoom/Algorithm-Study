// 언어: JavaScript, (성공/실패): (1/2), 메모리: 166,160 KB, 시간: 732 ms
const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');
const [M, N] = input[0].split(' ').map(Number);

// 토마토 상태를 저장할 2차원 배열
const tomatoBox = [];
for (let i = 1; i <= N; i++) {
  tomatoBox.push(input[i].split(' ').map(Number));
}

// BFS용 큐(익은 토마토들의 좌표 저장)
const queue = [];
// 익지 않은 토마토 개수
let unripe = 0;

// 초기 상태: 익은 토마토는 queue에 넣고, 익지 않은 토마토 개수 세기
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (tomatoBox[y][x] === 1) {
      queue.push([y, x, 0]); // [y좌표, x좌표, 날짜]
    } else if (tomatoBox[y][x] === 0) {
      unripe++;
    }
  }
}
// 4방향 이동용
const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];
// qeue의 head 역할
let qIdx = 0;
// 토마토가 익는 데 걸린 최대 날짜
let maxDay = 0;

// BFS 시작
while (qIdx < queue.length) {
  // 큐에서 하나 꺼내기
  const [y, x, day] = queue[qIdx++];
  // 날짜 갱신
  maxDay = Math.max(maxDay, day);

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    // 상자 안에 있는지 확인
    if (ny >= 0 && ny < N && nx >= 0 && nx < M) {
      // 익지 않은 토마토만 익힐 수 있음
      if (tomatoBox[ny][nx] === 0) {
        // 익었다 표시
        tomatoBox[ny][nx] = 1;
        // 다음 날에 익은 것으로 큐에 추가
        queue.push([ny, nx, day + 1]);
        // 익지 않은 토마토 개수 감소
        unripe--;
      }
    }
  }
}

// BFS 종료후
if (unripe > 0) {
  // 익지 않은 토마토가 남아 있으면 -1
  console.log(-1);
} else {
  // 모든 토마토가 익었으면 최소 일수 출력
  console.log(maxDay);
}
