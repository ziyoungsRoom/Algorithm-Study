// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 90168 KB , 시간 : 496 ms

// 문제: 루트가 1인 트리에서 각 노드의 부모 찾기
// BFS: 루트부터 탐색하며 부모 기록

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const graph = Array.from({ length: n + 1 }, () => []);
const parent = new Array(n + 1).fill(0);

// 양방향 그래프 생성
for (let i = 1; i < n; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

// BFS로 부모 찾기
const queue = [1];
parent[1] = 1; // 루트 표시

let idx = 0;
while (idx < queue.length) {
  const node = queue[idx++];

  for (const next of graph[node]) {
    if (parent[next] === 0) {
      // 미방문
      parent[next] = node; // 부모 기록
      queue.push(next);
    }
  }
}

// 2번부터 출력
const result = [];
for (let i = 2; i <= n; i++) {
  result.push(parent[i]);
}

console.log(result.join("\n"));
