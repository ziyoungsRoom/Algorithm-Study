// 언어: JavaScript, (성공, 실패): 1/2, 메모리: 9612 KB, 시간: 92 ms
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(input[0]);
const score = input[1].split(" ").map(Number);
const bestScore = Math.max(...score);

let sum = 0;
for (let i = 0; i < score.length; i++) {
  const newScore = (score[i] / bestScore) * 100;
  sum += newScore;
}
console.log(sum / N);
