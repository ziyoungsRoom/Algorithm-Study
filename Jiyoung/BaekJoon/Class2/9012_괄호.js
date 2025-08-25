// 언어 : Javascript , (성공/실패) : 1/10 , 메모리 : 10220 KB , 시간 : 100 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const [leftP, rightP] = ["(", ")"];

// leftP : +1 / rightP : -1 로 계산
// 중간에 마이너스 값이 나오면 false / 문자열을 다 반복한 후, 0이면 true 그렇지 않으면 false
const isVPS = (PS) => {
  let count = 0;
  for (let i = 0; i < PS.length; i++) {
    count += PS.split("")[i] === leftP ? 1 : -1;
    if (count < 0) return "NO";
  }

  if (count === 0) return "YES";
  return "NO";
};

const result = input.map((PS) => isVPS(PS));

console.log(result.join("\n"));
