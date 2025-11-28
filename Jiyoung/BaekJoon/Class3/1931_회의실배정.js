// 언어 : Javascript , (성공/실패) : 3/1 , 메모리 : 41668 KB , 시간 : 336 ms

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const meetings = input
  .slice(1)
  .map((time) => time.trim().split(' ').map(Number));

// 회의 끝나는 시간이 빠른 순으로 정렬 & 끝나는 시간이 같으면 시작 시간이 빠른 순으로 정렬
meetings.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

// 시작 시간 & 종료 시간이 제일 빠른 회의 선택 : meetings[0]
let endTime = meetings[0][1];
let count = 1;

// 그 다음 회의부터 확인
for (let i = 1; i < meetings.length; i++) {
  if (meetings[i][0] >= endTime) {
    endTime = meetings[i][1];
    count++;
  }
}

console.log(count);
