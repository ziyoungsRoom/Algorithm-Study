// 언어 : Typescript , (성공/실패) : 0/10 , 메모리 : 초과 KB , 시간 : 0 ms => 메모리 초과 오류 발생

// 문제 : 비어있는 공집합 S가 주어졌을 때, 아래 연산을 수행하는 프로그램을 작성하시오.
// add x: S에 x를 추가한다. (1 ≤ x ≤ 20) S에 x가 이미 있는 경우에는 연산을 무시한다.
// remove x: S에서 x를 제거한다. (1 ≤ x ≤ 20) S에 x가 없는 경우에는 연산을 무시한다.
// check x: S에 x가 있으면 1을, 없으면 0을 출력한다. (1 ≤ x ≤ 20)
// toggle x: S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다. (1 ≤ x ≤ 20)
// all: S를 {1, 2, ..., 20} 으로 바꾼다.
// empty: S를 공집합으로 바꾼다.
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);
const operations = input.slice(1).map((line) => line.split(" "));

let set = new Set();
for (let i = 0; i < n; i++) {
  const [op, x] = operations[i];
  if (op === "add") {
    set.add(x);
  } else if (op === "remove") {
    set.delete(x);
  } else if (op === "check") {
    console.log(set.has(x) ? 1 : 0);
  } else if (op === "toggle") {
    set.has(x) ? set.delete(x) : set.add(x);
  } else if (op === "all") {
    set = new Set(Array.from({ length: 20 }, (_, i) => i + 1));
  } else if (op === "empty") {
    set = new Set();
  }
}
