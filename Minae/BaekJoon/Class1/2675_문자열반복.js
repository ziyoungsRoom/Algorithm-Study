// 언어 : Javascript , (성공/실패) : 1/3 , 메모리 : 9368 KB , 시간 : 96 ms
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  const [R, S] = input[i].split(" ");
  let result = "";

  for (let char of S) {
    result += char.repeat(R);
  }

  console.log(result);
}
