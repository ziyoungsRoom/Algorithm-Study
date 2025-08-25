// 언어: JavaScript, (성공/실패): 1/2, 메모리: 61,380 KB, 시간: 3,824 ms
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = parseInt(input[0]);
const people = [];

for (let i = 1; i <= N; i++) {
  const line = input[i];
  const parts = line.split(" ");
  people.push([parts[0], parts[1]]);
}

people.sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

people.forEach((person) => {
  console.log(person.join(" "));
});
