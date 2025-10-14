// 언어: JavaScript, (성공/실패): 1/0, 메모리: 20,028 KB, 시간: 3,556 ms

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ");

// 입력값 N(수빈의 위치), K(동생 위치)
const [N, K] = input.map(Number);

// BFS를 위한 큐(queue)와 방문 기록 배열(visited) 생성
const queue = [];
const visited = new Array(100001).fill(false);

// 시작점(현재 위치 N, 시간 0초)
queue.push([N, 0]);
visited[N] = true;

// 큐가 빌 때까지 반복(BFS 탐색)
while (queue.length > 0) {
  // 현재 위치와 이동 시간을 큐에서 꺼냄
  const [position, time] = queue.shift();

  //목표 위치(K)에 도달하면 현재까지의 시간을 출력하고 종료
  if (position === K) {
    console.log(time);
    break;
  }

  // 수빈이가 이동할 수 있는 다음 위치들
  const nextPositions = [position - 1, position + 1, position * 2];

  // 다음 위치들을 하나씩 확인
  for (const next of nextPositions) {
    // 이동 가능한 범위 내(0 ~ 100000)인지 검사
    if (next >= 0 && next <= 100000) {
      // 아직 방문하지 않은 곳이라면 큐에 추가
      if (visited[next] === false) {
        queue.push([next, time + 1]); // 시간 1초 증가
        visited[next] = true; // 방문 처리
      }
    }
  }
}
