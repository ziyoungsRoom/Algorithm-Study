// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 27136 KB , 시간 : 228 ms

// 문제 : 수빈이는 동생과 숨바꼭질을 하고 있다. 수빈이는 현재 점 N(0 ≤ N ≤ 100,000)에 있고, 동생은 점 K(0 ≤ K ≤ 100,000)에 있다. 수빈이는 걷거나 순간이동을 할 수 있다. 만약, 수빈이의 위치가 X일 때 걷는다면 1초 후에 X+1 또는 X-1로 이동하게 된다. 순간이동을 하는 경우에는 1초 후에 2*X의 위치로 이동하게 된다.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [N, K] = input.map(Number);

// N과 K가 같으면 이동할 필요 없음
if (N === K) {
  console.log(0);
  return;
}

// BFS를 위한 큐와 방문 배열
const queue = [[N, 0]]; // [위치, 시간]
const visited = new Array(100001).fill(false);
visited[N] = true;

let front = 0; // 큐의 시작 인덱스

while (front < queue.length) {
  const [pos, time] = queue[front++];

  // 3가지 이동 방법
  const nextPositions = [pos - 1, pos + 1, pos * 2];

  for (const next of nextPositions) {
    // 목표 도달
    if (next === K) {
      console.log(time + 1);
      return;
    }

    // 범위 내에 있고 방문하지 않은 경우
    if (next >= 0 && next <= 100000 && !visited[next]) {
      visited[next] = true;
      queue.push([next, time + 1]);
    }
  }
}
