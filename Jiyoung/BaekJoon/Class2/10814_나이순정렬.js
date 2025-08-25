// 언어 : Javascript , (성공/실패) : 1/4 , 메모리 : 46540 KB , 시간 : 356 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값 첫번째 줄 제거
input.shift();

const members = input.map((member) => {
  let [age, name] = member.trim().split(" ");
  return [Number(age), name];
});

// 나이 비교하여 오름차순으로 정렬
const sorted_members = members.sort((a, b) => a[0] - b[0]);

const answer = sorted_members.map((member) => member.join(" "));

console.log(answer.join("\n"));
