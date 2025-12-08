// 언어: JavaScript, (성공/실패): (1/1), 메모리: 81,644 KB, 시간: 3,820 ms
const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

// 노드 개수
const N = Number(input[0]);
// 트리를 저장할 인접 리스트
// graph[i] = i번 노드와 연결된 노드들의 배열
const graph = Array.from({ length: N + 1 }, () => []);

// 가선 정보 이력받아 양방향으로 저장
for (let i = 1; i < input.length; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  // 트리는 방향이 없기 때문에 양쪽 모두 push
  graph[u].push(v);
  graph[v].push(u);
}

// 각 노드의 부모를 저장할 배열
// parent[i] = i번 노드의 부모 번호
const parent = Array(N + 1).fill(0);
// 방문 여부 체크 배열
const visited = Array(N + 1).fill(false);
// BFS를 위한 큐
const queue = [];
// 루트는 1번이므로, BFS 시작점을 1로 설정
queue.push(1);
visited[1] = true;

// BFS 시작
while (queue.length > 0) {
  const currentNode = queue.shift(); // 현재 노드 꺼내기

  // 현재 노드와 연결된 이웃 노드 확인
  for (const next of graph[currentNode]) {
    // 아직 방문하지 않은 노드라면
    if (!visited[next]) {
      visited[next] = true; // 방문 체크
      parent[next] = currentNode; // 부모 기록
      queue.push(next); // 큐에 추가해 다음 탐색으로 이어짐
    }
  }
}

for (let i = 2; i <= N; i++) {
  console.log(parent[i]);
}
