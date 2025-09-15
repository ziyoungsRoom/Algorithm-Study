// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 9432 KB , 시간 : 100 ms

// 문제 : 웜 바이러스는 네트워크를 통해 전파되며, 한 컴퓨터가 감염되면 연결된 모든 컴퓨터가 감염된다.
// 1번 컴퓨터가 바이러스에 걸렸을 때, 네트워크 연결을 따라 바이러스가 퍼져나간다.
// 1번 컴퓨터를 통해 감염되는 컴퓨터의 개수를 구하는 문제이다. (1번 컴퓨터는 개수에서 제외)
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]); // 컴퓨터 개수
const M = Number(input[1]); // 연결 개수

// 🔗 인접 리스트로 그래프 생성
const graph = Array.from({ length: N + 1 }, () => []);

// 연결 정보 입력 (양방향!)
for (let i = 0; i < M; i++) {
  const [a, b] = input[i + 2].split(" ").map(Number);
  graph[a].push(b); // a → b 연결
  graph[b].push(a); // b → a 연결 (양방향이니까!)
}

// 방문 체크 배열
const visited = Array(N + 1).fill(false);

// 🔥 DFS 함수
function dfs(node) {
  visited[node] = true;

  for (let neighbor of graph[node]) {
    if (!visited[neighbor]) {
      dfs(neighbor);
    }
  }
}

// 1번 컴퓨터부터 시작!
dfs(1);

// 1번 제외하고 감염된 컴퓨터 개수 세기
let count = 0;
for (let i = 2; i <= N; i++) {
  if (visited[i]) count++;
}

console.log(count);
