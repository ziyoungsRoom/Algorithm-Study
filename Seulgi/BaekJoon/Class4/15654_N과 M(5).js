// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 22772 KB , 시간 : 196 ms

// 문제 : N개 중 M개를 고른 순열 (순서 있음, 중복 X)
// 백트래킹 : 방문 체크하며 모든 순열 생성

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
// 사전순 출력을 위해 정렬 필수!
const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

// 방문 체크 배열 (중복 선택 방지)
const visited = new Array(N).fill(false);
// 현재까지 선택한 수들
const selected = [];
// 모든 순열 저장
const result = [];

/**
 * DFS로 순열 생성
 * @param {number} depth - 현재까지 선택한 개수
 */
function dfs(depth) {
  // M개를 모두 선택했으면 결과에 추가
  if (depth === M) {
    result.push(selected.join(" "));
    return;
  }

  // 모든 숫자를 순회하며 선택
  for (let i = 0; i < N; i++) {
    // 이미 선택한 숫자는 건너뛰기
    if (!visited[i]) {
      // 백트래킹 3단계
      visited[i] = true; // 1. 선택
      selected.push(numbers[i]);
      dfs(depth + 1); // 2. 재귀 호출
      selected.pop(); // 3. 선택 취소
      visited[i] = false;
    }
  }
}

// DFS 시작
dfs(0);

// 결과 출력
console.log(result.join("\n"));
