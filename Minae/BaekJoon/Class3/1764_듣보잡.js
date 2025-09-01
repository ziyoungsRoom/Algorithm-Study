// 언어: JavaScript, (성공/실패): 2/10, 메모리: 27,784 KB, 시간: 204 ms
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const array = input.slice(1);

const canNotHear = array.slice(0, N);
const canNotSee = array.slice(N, N + M);

// 듣지 못한 사람들을 Set에 저장
const setA = new Set(canNotHear);
// 듣보잡을 담을 배열
const result = [];

// 보지 못한 사람들 명단을 돌면서, 듣지 못한 명단에 있으면 result에 추가
for (const name of canNotSee) {
  if (setA.has(name)) result.push(name);
}

// 사전순 정렬
result.sort();

console.log(result.length + "\n" + result.join("\n"));
