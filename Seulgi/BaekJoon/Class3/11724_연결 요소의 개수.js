// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 101252 KB , 시간 : 760 ms

// 문제 : 방향 없는 그래프에서 연결 요소의 개수를 구한다.
// BFS를 사용하여 각 그룹을 탐색한다.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

// 인접 리스트로 그래프 생성
const graph = Array.from({ length: N + 1 }, () => []);

// 간선 입력 (양방향)
for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

// 방문 체크 배열
const visited = new Array(N + 1).fill(false);

// BFS 함수
function bfs(start) {
  const queue = [start];
  visited[start] = true;

  while (queue.length > 0) {
    const node = queue.shift();

    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
}

// 연결 요소 개수 세기
let count = 0;

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    bfs(i); // 새로운 그룹 탐색 시작
    count++; // 그룹 개수 증가
  }
}

console.log(count);
