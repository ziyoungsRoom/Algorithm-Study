// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 9352 KB , 시간 : 96 ms

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

for (let i = 1; i <= 9; i++) {
  console.log(`${N} * ${i} = ${N * i}`);
}
