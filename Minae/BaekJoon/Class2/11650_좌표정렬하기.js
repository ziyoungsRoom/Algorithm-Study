// 언어: JavaScript, (성공/실패): 1/6, 메모리: 63,708 KB, 시간: 3,804 ms
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const inputLines = input.slice(1);
const coordinates = [];

for (let i = 0; i < N; i++) {
  const line = inputLines[i];
  const parts = line.split(" ");
  coordinates.push([parseInt(parts[0]), parseInt(parts[1])]);
}

coordinates.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

coordinates.forEach((code) => {
  console.log(code.join(" "));
});
