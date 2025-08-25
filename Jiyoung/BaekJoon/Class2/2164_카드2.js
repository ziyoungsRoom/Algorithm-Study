// 언어 : Javascript , (성공/실패) : 1/4 , 메모리 : 28816 KB , 시간 : 216 ms

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);
const cards = Array.from({ length: n }, (_, i) => i + 1);

// 배열의 시작 인덱스 설정
let head = 0;

// shift() 의 시간 복잡도 : O(n) 으로 인해 메모리 초과
// push() 의 시간 복잡도 : O(1)
while (cards.length - head > 1) {
  // 시작 인덱스 +1 : 맨 앞 요소를 삭제한 효과
  head++;
  cards.push(cards[head]);
  head++;
}

console.log(cards[head]);
