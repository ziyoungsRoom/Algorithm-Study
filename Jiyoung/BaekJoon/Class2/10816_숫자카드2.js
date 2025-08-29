// 언어 : Javascript , (성공/실패) : 1/4 , 메모리 : 171412 KB , 시간 : 720 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const cards = input[1].split(" ").map(Number);
const queries = input[3].split(" ").map(Number);

// 숫자별 개수를 카운트해서 Map { 카드 값 : 개수 } 에 넣어요.
const countCards = new Map();
for (const c of cards) {
  countCards.set(c, (countCards.get(c) || 0) + 1);
}

// 찾고 있는 값이 있을 경우 개수, 없으면 0을 추가해요.
let result = [];
for (const q of queries) {
  result.push(countCards.get(q) || 0);
}

console.log(result.join(" "));
