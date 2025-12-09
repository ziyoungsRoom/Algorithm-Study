// 언어 : Javascript , (성공/실패) : 2/1 , 메모리 : 92296 KB , 시간 : 464 ms
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const N = +input[0];
const connected_arr = input
  .slice(1)
  .map((connect) => connect.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

// 양방향 인접리스트 구성
for (const [a, b] of connected_arr) {
  graph[a].push(b);
  graph[b].push(a);
}

// parents : 각 인덱스의 부모 노드를 담은 배열
const parents = new Array(N + 1).fill(0);

const visited = new Array(N + 1).fill(false);
const queue = [];
let head = 0;

const BFS = () => {
  queue.push(1);
  visited[1] = true;

  while (queue.length > head) {
    const parent_node = queue[head++];

    // 해당 인덱스의 인접 리스트만 방문 여부 체크하여 parents에 값 추가
    for (const node of graph[parent_node]) {
      if (!visited[node]) {
        parents[node] = parent_node;
        queue.push(node);

        visited[node] = true;
      }
    }
  }
};

BFS();

console.log(parents.slice(2).join('\n'));
