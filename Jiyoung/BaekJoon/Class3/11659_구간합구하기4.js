// 언어 : Javascript , (성공/실패) : 1/4 , 메모리 : 54340 KB , 시간 : 344 ms
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numbers = input[1].split(" ").map(Number);
const sliceIndexs = input
  .slice(2, input.length)
  .map((idx) => idx.split(" ").map(Number));

// 누적합 : 한 배열의 구간 합을 여러번 구해야 할 때
// prefix [첫 인덱스부터 해당 인덱스까지의 합을 미리 구한 배열] 의 값을 활용하여 구간 합 도출
const prefix = [0];

for (let i = 0; i < numbers.length; i++) {
  prefix[i + 1] = prefix[i] + numbers[i];
}

const result = sliceIndexs.map((idx) => {
  const startIdx = idx[0] - 1;
  const lastIdx = idx[1];

  return prefix[lastIdx] - prefix[startIdx];
});

console.log(result.join("\n"));
