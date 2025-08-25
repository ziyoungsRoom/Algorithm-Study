// 언어: JavaScript, (성공/실패): 1/4, 메모리: 41,288 KB, 시간: 208 ms
const N = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());

const cards = [];
for (let i = 1; i <= N; i++) {
  cards.push(i);
}

let start = 0;

while (cards.length - start > 1) {
  start++;

  cards.push(cards[start]);
  start++;
}

console.log(cards[start]);
