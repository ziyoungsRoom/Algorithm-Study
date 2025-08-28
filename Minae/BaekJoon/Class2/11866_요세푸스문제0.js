// 언어: JavaScript, (성공/실패): 1/1, 메모리: 9,724 KB, 시간: 96 ms
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split(" ");

const [N, K] = input.map(Number);

// 1부터 N까지의 사람들을 배열로 생성
const people = Array.from({ length: N }, (_, i) => i + 1);
// 제거된 순서를 저장할 배열
const result = [];
// 현재 카운트 시작 위치
let currentIndex = 0;

// 모든 사람이 제거될 때까지 반복
while (people.length !== 0) {
  // 현재 위치에서 K번째 사람의 인덱스 계산(나머지 연산으로 원형 처리)
  removeIndex = (currentIndex + K - 1) % people.length;
  // 제거될 사람을 결과 배열에 추가
  result.push(people[removeIndex]);
  // people 배열에서 해당 사람 제거
  people.splice(removeIndex, 1);
  // 다음 시작 인덱스 설정(제거된 자리가 다음 시작점)
  currentIndex = removeIndex % people.length;
}

console.log(`<${result.join(", ")}>`);
