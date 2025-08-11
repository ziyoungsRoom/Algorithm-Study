// 언어 : Javascript , (성공/실패) : 1/2 , 메모리 : 9592 KB , 시간 : 104 ms
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const T = input[0];

for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(" ");
  console.log(parseInt(A) + parseInt(B));
}
