// 언어: JavaScript, (성공/실패): 1/2, 메모리: 19568 KB, 시간: 220 ms
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const words = Array.from(new Set(input.slice(1)));
const sortWords = words.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    return a.localeCompare(b);
  }
});

console.log(sortWords.join("\n"));
