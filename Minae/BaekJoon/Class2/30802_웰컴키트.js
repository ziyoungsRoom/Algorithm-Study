// 언어 : Javascript , (성공/실패) : 1/3 , 메모리 : 9588 KB , 시간 : 92 ms
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const members = parseInt(input[0]);
const tShirts = input[1].split(" ").map(Number);
const [T, P] = input[2].split(" ").map(Number);

let totalTShirts = 0;
for (let i = 0; i < 6; i++) {
  totalTShirts += Math.ceil(tShirts[i] / T);
}

const penBundles = Math.floor(members / P); // 수정!
const penSingles = members % P; // 수정!

console.log(totalTShirts);
console.log(penBundles, penSingles);
