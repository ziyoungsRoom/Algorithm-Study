// 언어 : Javascript , (성공/실패) : 1/2 , 메모리 : 9432 KB , 시간 : 88 ms
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  if (input[i] === "0 0 0") {
    break;
  }

  const sortedNums = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  const [c, b, a] = sortedNums;

  if (c * c === b * b + a * a) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
