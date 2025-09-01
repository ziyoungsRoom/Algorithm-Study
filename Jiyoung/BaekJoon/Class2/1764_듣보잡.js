// 언어 : Javascript , (성공/실패) : 1/3 , 메모리 : 28084 KB , 시간 : 212 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const names = input.slice(1);

const notHeardSet = new Set([...names.slice(0, N)]);
const notSeen = names.slice(N, N + M);

// Set.has () : 포함 여부 체크
// a.localeCompare(b) : a와 b 의 사전순 문자열 비교
const notHeardSeen = notSeen
  .filter((name) => notHeardSet.has(name))
  .sort((a, b) => a.localeCompare(b));

const answer = [notHeardSeen.length, ...notHeardSeen].join("\n");

console.log(answer);
