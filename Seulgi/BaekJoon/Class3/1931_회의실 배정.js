// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 45060 KB , 시간 : 408 ms

// 문제 : 한 개의 회의실이 있는데 이를 사용하고자 하는 N개의 회의에 대하여 회의실 사용표를 작성하려고 한다.
// 각 회의 I에 대해 시작시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 회의의 최대 개수를 찾아보자.
// 단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.
// 회의의 시작시간과 끝나는 시간이 같을 수도 있다. 이 경우에는 시작하자마자 끝나는 것으로 생각하면 된다.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const meetings = [];

for (let i = 1; i <= n; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  meetings.push([start, end]);
}

// 끝나는 시간 기준 정렬 (같으면 시작 시간 기준)
meetings.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let count = 0;
let lastEnd = 0;

for (const [start, end] of meetings) {
  if (start >= lastEnd) {
    count++;
    lastEnd = end;
  }
}

console.log(count);
