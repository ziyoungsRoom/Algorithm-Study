// 언어 : Javascript , (성공/실패) : 1/5 , 메모리 : 9660 KB , 시간 : 92 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const score_list = input[1].split(" ").map(Number);

const M = Math.max(...score_list);
const lie_score_list = score_list.map((score) =>
  score === 0 ? 0 : (score / M) * 100
);

// 배열의 합 : reduce((acc, curr) => acc + curr, initialValues)
// reduce 사용할 때는 초기값을 설정해주는 편이 좋다고 합니다.
const sum_lie_score = lie_score_list.reduce((acc, curr) => acc + curr, 0);
const avg_lie_score = sum_lie_score / N;

console.log(avg_lie_score);
