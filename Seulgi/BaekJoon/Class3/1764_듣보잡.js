// 언어 : Javascript , (성공/실패) : 0/10 , 메모리 : 27228 KB , 시간 : 196 ms

// 문제 : 첫째 줄에 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M이 주어진다. 이어서 둘째 줄부터 N개의 줄에 걸쳐 듣도 못한 사람의 이름과, N+2째 줄부터 보도 못한 사람의 이름이 순서대로 주어진다. 이름은 띄어쓰기 없이 알파벳 소문자로만 이루어지며, 그 길이는 20 이하이다. N, M은 500,000 이하의 자연수이다.
// 듣도 못한 사람의 명단에는 중복되는 이름이 없으며, 보도 못한 사람의 명단도 마찬가지이다.
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const unheard = new Set(input.slice(1, N + 1)); // 듣도 못한 사람
const unseen = input.slice(N + 1, N + 1 + M); // 보도 못한 사람

let result = [];
for (let name of unseen) {
  if (unheard.has(name)) result.push(name); // 교집합
}

result.sort(); // 사전순 정렬

console.log(result.length + "\n" + result.join("\n"));
