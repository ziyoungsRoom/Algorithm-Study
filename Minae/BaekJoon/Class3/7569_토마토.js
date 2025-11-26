// 언어: JavaScript, (성공/실패): 1/1, 메모리: 158,176 KB , 시간: 760 ms
const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');
const [M, N, H] = input[0].split(' ').map(Number);

// 3차원 배열(토마토 상태)을 저장할 변수
const tomatoBox = [];
// input[0]은 M, N, H 이므로 1부터 시작
let idx = 1;

// H개의 층을 차례대로 읽어서 tomatoBox를 구성
for (let h = 0; h < H; h++) {
  const floor = [];
  for (let n = 0; n < N; n++) {
    // 한 줄씩 읽어와서 숫자 배열로 변환
    floor.push(input[idx].split(' ').map(Number));
    // 다음 층을 세기위한 층 수 증가
    idx++;
  }
  // 완성된 층을 tomatoBox에 추가
  tomatoBox.push(floor);
}

// BFS를 위한 큐와 안 익익은 토마토 개수 카운트
const queue = [];
let unripe = 0;

// 3중 반목문으로 모든 칸 확인
for (let h = 0; h < H; h++) {
  // 각 층
  for (let n = 0; n < N; n++) {
    // 각 행
    for (let m = 0; m < M; m++) {
      // 각 열
      if (tomatoBox[h][n][m] === 1) {
        // 익은 토마토는 큐에 [h, n, m, 날짜] 넣기
        queue.push([h, n, m, 0]);
      } else if (tomatoBox[h][n][m] === 0) {
        // 익지 않은 토마토 개수 세기
        unripe++;
      }
    }
  }
}

// 6방향: 위층, 아래층, 위, 아래, 왼쪽, 오른쪽
const dh = [-1, 1, 0, 0, 0, 0]; // 높이(층) 변화
const dn = [0, 0, -1, 1, 0, 0]; // 세로(행) 변화
const dm = [0, 0, 0, 0, -1, 1]; // 가로(열) 변화

let qIdx = 0; // 큐 인덱스
let days = 0; // 마지막에 걸린 날짜 기록

// BFS 시작
while (qIdx < queue.length) {
  const [h, n, m, day] = queue[qIdx++];
  days = day; // 현재까지 최대 날짜 저장

  // 6방향으로 탐색
  for (let i = 0; i < 6; i++) {
    const nh = h + dh[i];
    const nn = n + dn[i];
    const nm = m + dm[i];

    // 범위 체크: 박스 안에 있는지?
    if (nh >= 0 && nh < H && nn >= 0 && nn < N && nm >= 0 && nm < M) {
      // 익지 않은 토마토(0)인 경우
      if (tomatoBox[nh][nn][nm] === 0) {
        // 익은 토마토로 변경
        tomatoBox[nh][nn][nm] = 1;
        // 다음 날에 익은 상태로 큐에 넣기
        queue.push([nh, nn, nm, day + 1]);
        // 익지 않은 토마토 개수 감소
        unripe--;
      }
    }
  }
}

// BFS가 끝난 후
if (unripe > 0) {
  // 안 익은 게 남아있다면 -1 출력
  console.log(-1);
} else {
  // 모두 익었으면 마지막 day 출력
  console.log(days);
}
