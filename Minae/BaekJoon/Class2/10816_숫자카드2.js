// 언어: JavaScript, (성공/실패): 1/1, 메모리: 196,492 KB, 시간: 1,172 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const cardN = input[1].split(" ");
const cardM = input[3].split(" ");

// 키와 값을 쌍으로 저장할 수 있는 객체 생성
const countCard = {};
// 상근이의 카드들을 하나씩 보면서 개수를 세어 countCard에 저장
for (let card of cardN) {
  if (countCard[card]) {
    countCard[card] = countCard[card] + 1;
  } else {
    countCard[card] = 1;
  }
}

const result = [];
// 질문받은 카드들의 개수를 찾아서 배열에 저장
for (let card of cardM) {
  result.push(countCard[card] || 0);
}

console.log(result.join(" "));
