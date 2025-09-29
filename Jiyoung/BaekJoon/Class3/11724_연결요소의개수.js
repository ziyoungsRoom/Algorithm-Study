// 언어 : Javascript , (성공/실패) : 2/1 , 메모리 : 102636 KB , 시간 : 748 ms

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const connected_list = Array.from({ length: N + 1 }, () => []);

// connected_list : 인접 리스트
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(Number);

  connected_list[a].push(b);
  connected_list[b].push(a);
}

let count = 0;

const visited = Array.from({ length: N + 1 }, () => false);
const queue = [];

visited[0] = true;

const BFS = (start) => {
  queue.push(start);
  visited[start] = true;

  // count: 연결되어 있는 요소 집합의 개수
  count++;

  while (queue.length > 0) {
    const node = queue.shift();

    for (const num of connected_list[node]) {
      if (!visited[num]) {
        visited[num] = true;
        queue.push(num);
      }
    }
  }

  // 방문하지 않은 요소가 있으면 다시 BFS 실행
  const filtered_visited = visited.filter((v) => v === false);
  if (filtered_visited.length) {
    BFS(visited.indexOf(false));
  }
};

BFS(1);

console.log(count);
