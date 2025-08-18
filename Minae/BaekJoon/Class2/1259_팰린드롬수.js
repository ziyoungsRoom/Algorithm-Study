// 언어 : Javascript , (성공/실패) : 1/4 , 메모리 : 9436 KB , 시간 : 96 ms
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  if (input[i] === "0") break;
  const strArry = input[i].split("");
  const reverseArry = strArry.reverse().join("");
  if (input[i] === reverseArry) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
