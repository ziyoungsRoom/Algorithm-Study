// 언어: JavaScript, (성공/실패): 1/0, 메모리: 140,864 KB, 시간: 540 ms

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

// N: 나무의 수, M: 필요한 나무의 길이
const [N, M] = input[0].split(" ").map(Number);
// 나무들의 높이 배열
const trees = input[1].split(" ").map(Number);

// h로 나무를 잘랐을 때 얻을 수 있는 나무 길이 총합을 구하는 함수
const getCutTree = (tree, h) => {
  let total = 0;
  for (let i = 0; i < trees.length; i++) {
    // 현재 나무를 h 높이로 잘랐을 때 남는 부분
    rest = trees[i] - h;
    // 잘린 부분이 양수일 때만 더함
    if (rest > 0) {
      total += rest;
    }
  }
  return total;
};

// 절단기 최소 높이(0부터 시작)
let left = 0;
// 절단기 최대 높이(가장 큰 나무 높이)
let right = Math.max(...trees);
// 최종 정답
let answer = 0;

// 이분 탐색 시작
while (left <= right) {
  // 절단기 높이 후보(중간값)
  let mid = Math.floor((left + right) / 2);

  // 나무를 mid 높이로 잘랐을 때 M(필요한 나무 길이) 이상이면
  if (getCutTree(trees, mid) >= M) {
    // 조건을 만족하는 높이를 기록
    answer = mid;
    // 더 높은 절단기 높이도 가능한지 확인(탐색 범위 올림)
    left = mid + 1;
  } else {
    // 필요한 나무 길이를 못 얻었으므로 절단기 높이를 낮춘다
    right = mid - 1;
  }
}

// 최종적으로 얻어진 절단기 높이 출력
console.log(answer);
