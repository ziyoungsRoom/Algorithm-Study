// 언어 : Javascript , (성공/실패) : 1/2 , 메모리 : 9592 KB , 시간 : 104 ms
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

for (let i = 0; i <= input.length; i++) {
  if (parseInt(A) === 0 && parseInt(B) === 0) {
    break;
  }
  console.log(parseInt(A) + parseInt(B));
}
