// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 13352 KB , 시간 : 160 ms

// 문제: 중복 숫자 있는 배열에서 순열 (중복 순열 제거)
// 핵심: 같은 깊이에서 같은 값 사용 방지

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const visited = new Array(N).fill(false);
const selected = [];
const result = [];

function dfs(depth) {
  if (depth === M) {
    result.push(selected.join(" "));
    return;
  }

  let prev = 0; // 이전에 사용한 값 기록
  for (let i = 0; i < N; i++) {
    // 미사용 && 같은 깊이에서 같은 값 X
    if (!visited[i] && prev !== numbers[i]) {
      visited[i] = true;
      selected.push(numbers[i]);
      prev = numbers[i]; // 사용한 값 기록
      dfs(depth + 1);
      selected.pop();
      visited[i] = false;
    }
  }
}

dfs(0);
console.log(result.join("\n"));
