// 언어: JavaScript, (성공/실패): (1/2), 메모리: 9,620 KB, 시간: 96 ms

const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

// 집의 개수 N
const N = parseInt(input[0]);
// 각 집을 R, G, B로 칠하는 비용을 담을 배열
const cost = [];
for (let i = 1; i <= N; i++) {
  cost.push(input[i].split(' ').map(Number));
}

// 0번 집까지의 최소 비용 상태로 초기화
// 첫 집은 이전 집이 없으므로 비용 그대로 사용
let prev = [...cost[0]];
// 1번 집부터 N-1번 집까지 차례대로 DP 수행
for (let i = 1; i < N; i++) {
  // i번 집까지 칠했을 때,
  // 마지막 집의 색이 각각 R, G, B인 경우의 최소 비용
  const cur = [
    cost[i][0] + Math.min(prev[1], prev[2]),
    cost[i][1] + Math.min(prev[0], prev[2]),
    cost[i][2] + Math.min(prev[0], prev[1]),
  ];
  prev = cur;
}

console.log(Math.min(...prev));
