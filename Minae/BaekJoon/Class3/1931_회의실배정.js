// 언어: JavaScript, (성공/실패): 1/1, 메모리: 45,172 KB, 시간: 384 ms

const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ');

// 회의 개수
const N = parseInt(input[0]);
const meetings = [];

// 각 줄에서 회의 시작/끝 시간을 읽어 배열에 넣기
for (let i = 1; i <= N; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  meetings.push([start, end]);
}

// 끝나는 시작이 빠른 순서로 정렬 -> 같다면 시작 시간이 빠른 순서로 정렬
meetings.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

// 선택한 회의 수
let count = 0;
// 마지막으로 선택한 회의의 종료 시간
let lastEndTime = 0;

// 정렬된 회의들을 순서대로 탐색하며 회의 선택
for (let i = 0; i < N; i++) {
  const [start, end] = meetings[i];

  // 현재 회의 시작 시간이 이전 회의 종료 시간 이후라면 선택 가능
  if (start >= lastEndTime) {
    count++;
    lastEndTime = end;
  }
}

console.log(count);
