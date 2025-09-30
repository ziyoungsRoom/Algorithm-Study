// 언어: JavaScript, (성공/실패): 1/1, 메모리: KB, 시간: ms

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

// N: 정점의 개수, M: 간선의 개수
const [N, M] = input[0].split(" ").map(Number);
// 인접 리스트 초기화: 1번 부터 N번 정점까지 사용
// 각 정점마다 연결된 정점을 담을 배열 생성
const graph = Array.from({ length: N + 1 }, () => []);
// 방문 여부 체크 배열(1번 ~ N번 정점)
const visited = Array(N + 1).fill(false);

// 간선 정보는 두 번째 줄부터 M개의 줄까지 주어짐
for (let i = 1; i <= M; i++) {
  // u, v 정점 입력 받기
  const [u, v] = input[i].split(" ").map(Number);
  // 무방향 그래프이므로 양쪽에 간선 추가
  graph[u].push(v);
  graph[v].push(u);
}

// 깊이 우선 탐색 함수 정의
function dfs(node) {
  // 이미 방문한 노드면 탐색 중단
  if (visited[node]) return;

  // 현재 노드 방문 처리
  visited[node] = true;

  // 현재 노드와 연결된 모든 노드 탐색
  for (let next of graph[node]) {
    // 방문하지 않은 노드라면
    if (!visited[next]) {
      // 재귀하여 방문
      dfs(next);
    }
  }
}

// 연결 요소 개수 카운트
let count = 0;
// 1번 노드부터 N번 노드까지 확인
for (let i = 1; i <= N; i++) {
  // 아직 방문하지 않은 노드라면
  if (!visited[i]) {
    // 해당 노드를 dfs실행하여 true로 바뀜
    dfs(i);
    // dfs가 끝났다는 건 노드 i와 연결된 전체 그룹을 다 탐색했다는 의미
    // 따라서 새로운 연결 요소를 찾았으니까 count 하나를 증가시킴
    count++;
  }
}

console.log(count);
