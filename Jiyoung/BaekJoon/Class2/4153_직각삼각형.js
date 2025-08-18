// 언어 : Javascript , (성공/실패) : 1/6 , 메모리 : 9428 KB , 시간 : 92 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let idx = 0;

while (true) {
  // 제일 긴 변을 판별하기 위해 배열 오름차순 정렬
  let [side1, side2, side3] = input[idx]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  // 마지막 입력값 0 0 0 을 활용한 break point!
  if (side1 === 0 && side2 === 0 && side3 === 0) break;
  else if (side1 ** 2 + side2 ** 2 === side3 ** 2) console.log("right");
  else console.log("wrong");

  idx++;
}
