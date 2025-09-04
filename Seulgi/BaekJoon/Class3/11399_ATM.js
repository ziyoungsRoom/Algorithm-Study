// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 9676 KB , 시간 : 100 ms

// 문제 : 첫째 줄에 사람의 수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄에는 각 사람이 돈을 인출하는데 걸리는 시간 Pi가 주어진다. (1 ≤ Pi ≤ 1,000)
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = +input[0]; // 사람의 수
const times = input[1].split(" ").map(Number); // 각 사람이 돈을 인출하는데 걸리는 시간

times.sort((a, b) => a - b); // 시간 오름차순 정렬

let answer = 0; // 총 대기 시간
let waitTime = 0; // 현재 사람의 대기 시간

for (let time of times) {
  waitTime += time; // 현재 사람의 대기 시간 + 이전 사람의 대기 시간
  answer += waitTime; // 총 대기 시간 + 현재 사람의 대기 시간
}

console.log(answer);
