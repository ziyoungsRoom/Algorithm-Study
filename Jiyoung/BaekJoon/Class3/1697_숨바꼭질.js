// 언어 : Javascript , (성공/실패) : 1/2 , 메모리 : 24284 KB , 시간 : 3736 ms
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [N, K] = input.split(' ').map(Number);

const BFS = (start, target) => {
  // 방문한 위치를 기록하기 위한 Set
  const visitedSet = new Set([start]);
  const queue = [[start, 0]];

  while (queue.length) {
    const [current, time] = queue.shift();

    if (current === target) return time;

    // nextPositions : 다음 이동할 수 있는 위치들
    const nextPositions = [current - 1, current + 1, current * 2];

    for (const next of nextPositions) {
      // next가 유효한 범위 내에 있고, 방문하지 않은 위치라면 큐에 추가
      if (next >= 0 && next <= 100000 && !visitedSet.has(next)) {
        visitedSet.add(next);
        queue.push([next, time + 1]);
      }
    }
  }
};

console.log(BFS(N, K));
