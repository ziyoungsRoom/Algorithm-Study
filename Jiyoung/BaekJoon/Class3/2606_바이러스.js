// 언어 : Javascript , (성공/실패) : 1/9 , 메모리 : 9432 KB , 시간 : 96 ms
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const computer_count = Number(input[0]);
const input_list = input.slice(2).map((el) => el.split(" ").map(Number));

// 컴퓨터 node 번호와 인덱스값을 일치시키기 위해 +1
const connect_list = Array.from({ length: computer_count + 1 }, () => []);

// 양방향 그래프이기 때문에 양쪽 모두 push
// 만약 한쪽에만 넣어둘 경우, 순서에 따라 연결되어 있지 않은 노드로 판단해서 값이 다르게 도출
for (const [num1, num2] of input_list) {
  connect_list[num1].push(num2);
  connect_list[num2].push(num1);
}

const BFS = (connect_list, start_idx) => {
  const queue = [];
  const visited = Array(computer_count + 1).fill(false);

  // queue의 역할 : 탐색할 노드 리스트
  // 인덱스로 해당 노드의 연결 리스트를 접근하여 queue에 넣고 방문 기록 true로 변경
  connect_list[start_idx].forEach((num) => {
    queue.push(num);
    visited[num] = true;
  });

  // queue 탐색할 노드 리스트 요소가 없을 때 종료
  while (queue.length > 0) {
    const q = queue.shift();

    // queue의 맨 처음 값을 빼서 방문 기록이 없을 경우 연결된 노드들을 queue에 넣고 방문 기록 true로 변경
    connect_list[q].forEach((num) => {
      if (!visited[num]) {
        queue.push(num);
        visited[num] = true;
      }
    });
  }

  // 방문 기록을 return하여 방문한 요소 및 개수 확인 가능
  return visited;
};

const count = BFS(connect_list, 1).filter((node) => node).length;

// -1 이유 ? 해당 문제에서 자기자신은 대상에서 제외하기 때문
console.log(count ? count - 1 : 0);
