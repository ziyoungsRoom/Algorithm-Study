// 언어 : Javascript , (성공/실패) : 1/6 , 메모리 : 9644 KB , 시간 : 156 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);

let answer = 0;

// 3중 for문으로 array에서 3개로 이루어진 조합 찾아내기
for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum <= M && sum > answer) {
        answer = sum;
      }
    }
  }
}

console.log(answer);
