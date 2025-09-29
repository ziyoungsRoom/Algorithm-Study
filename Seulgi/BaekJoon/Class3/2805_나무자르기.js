// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 137416 KB , 시간 : 676 ms

// 문제 : 절단기 높이 H를 설정하면 H보다 높은 나무의 윗부분이 잘린다.
// 최소 M미터의 나무를 얻으면서 H를 최대한 높게 설정하는 문제.
// 이진 탐색으로 최적의 H를 찾는다.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);

// 이진 탐색 범위 설정
let left = 0;
let right = Math.max(...trees);
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  // mid 높이로 잘랐을 때 얻는 나무 계산
  let total = 0;
  for (const tree of trees) {
    if (tree > mid) {
      total += tree - mid;
    }
  }

  // M미터 이상 얻을 수 있는지 확인
  if (total >= M) {
    answer = mid; // 가능하면 답 갱신
    left = mid + 1; // 더 높은 높이 시도
  } else {
    right = mid - 1; // 높이를 낮춰야 함
  }
}

console.log(answer);
